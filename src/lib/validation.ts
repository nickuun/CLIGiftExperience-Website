import { z } from 'zod';

export const orderSchema = z
  .object({
    yourName: z.string().min(2, 'Please enter your name.'),
    contact: z.string().min(5, 'Add an email address or WhatsApp number.'),
    recipientName: z.string().min(2, 'Add the recipient name.'),
    occasion: z.string().min(2, 'Choose the occasion.'),
    deadline: z.string().min(1, 'Select a target date.'),
    tone: z.enum(['funny', 'sweet', 'mysterious', 'romantic', 'nerdy']),
    difficulty: z.enum(['1', '2', '3', '4', '5']),
    experienceType: z.enum([
      'message-focused',
      'puzzle-focused',
      'treasure-hunt integrated',
    ]),
    length: z.enum(['short', 'medium']),
    relationship: z.string().min(2, 'Add a short relationship description.'),
    memories: z.string().min(20, 'Share a few memories, facts, or inside jokes.'),
    finalMessage: z.string().min(10, 'Add the final message or reveal.'),
    avoid: z.string().optional(),
    usePhysicalGifts: z.enum(['yes', 'no']),
    clueStops: z.string().optional(),
    hidingPlaces: z.string().optional(),
    finalLocation: z.string().optional(),
    avoidLocations: z.string().optional(),
    contactMethod: z.enum(['email', 'whatsapp']),
    budgetAck: z.boolean().refine((value) => value, {
      message: 'Please confirm the pricing structure.',
    }),
    scopeAck: z.boolean().refine((value) => value, {
      message: 'Please confirm the fixed-format scope.',
    }),
  })
  .superRefine((data, ctx) => {
    const wantsTreasureHunt =
      data.experienceType === 'treasure-hunt integrated' || data.usePhysicalGifts === 'yes';

    if (wantsTreasureHunt) {
      if (!data.clueStops?.trim()) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['clueStops'],
          message: 'Add the number of clue stops.',
        });
      }
      if (!data.hidingPlaces?.trim()) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['hidingPlaces'],
          message: 'Describe the available hiding places.',
        });
      }
      if (!data.finalLocation?.trim()) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['finalLocation'],
          message: 'Describe the final reveal location.',
        });
      }
    }
  });

export type OrderFormValues = z.infer<typeof orderSchema>;

export const defaultOrderValues: OrderFormValues = {
  yourName: '',
  contact: '',
  recipientName: '',
  occasion: 'Birthday',
  deadline: '',
  tone: 'sweet',
  difficulty: '2',
  experienceType: 'message-focused',
  length: 'short',
  relationship: '',
  memories: '',
  finalMessage: '',
  avoid: '',
  usePhysicalGifts: 'no',
  clueStops: '',
  hidingPlaces: '',
  finalLocation: '',
  avoidLocations: '',
  contactMethod: 'email',
  budgetAck: false,
  scopeAck: false,
};
