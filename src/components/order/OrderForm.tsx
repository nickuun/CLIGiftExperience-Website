import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  experienceOptions,
  formSteps,
  occasionOptions,
  pricing,
  toneOptions,
} from '../../content/site';
import { defaultOrderValues, orderSchema, type OrderFormValues } from '../../lib/validation';
import { currency } from '../../lib/utils';
import { Button } from '../ui/Button';
import { Panel } from '../ui/Panel';

const storageKey = 'cli-gift-order-draft';

const stepFields: Array<Array<keyof OrderFormValues>> = [
  ['yourName', 'contact', 'recipientName', 'occasion', 'deadline'],
  ['tone', 'difficulty', 'experienceType', 'length'],
  ['relationship', 'memories', 'finalMessage', 'avoid'],
  ['usePhysicalGifts', 'clueStops', 'hidingPlaces', 'finalLocation', 'avoidLocations'],
  ['contactMethod', 'budgetAck', 'scopeAck'],
];

function Field({
  label,
  hint,
  error,
  children,
}: {
  label: string;
  hint?: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-ink">{label}</span>
      {children}
      {hint ? <span className="mt-2 block text-xs text-inkMuted">{hint}</span> : null}
      {error ? <span className="mt-2 block text-xs text-danger">{error}</span> : null}
    </label>
  );
}

function inputClasses() {
  return 'w-full rounded-2xl border border-line bg-black/20 px-4 py-3 text-sm text-ink outline-none transition placeholder:text-inkMuted/50 focus:border-accent/40';
}

export function OrderForm() {
  const navigate = useNavigate();
  const [stepIndex, setStepIndex] = useState(0);

  const form = useForm<OrderFormValues>({
    resolver: zodResolver(orderSchema),
    defaultValues: defaultOrderValues,
    mode: 'onTouched',
  });

  const experienceType = form.watch('experienceType');
  const usePhysicalGifts = form.watch('usePhysicalGifts');
  const wantsTreasureHunt =
    experienceType === 'treasure-hunt integrated' || usePhysicalGifts === 'yes';

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        form.reset({ ...defaultOrderValues, ...JSON.parse(saved) });
      } catch {
        localStorage.removeItem(storageKey);
      }
    }
  }, [form]);

  useEffect(() => {
    const subscription = form.watch((value) => {
      localStorage.setItem(storageKey, JSON.stringify(value));
    });
    return () => subscription.unsubscribe();
  }, [form]);

  const totalPrice = useMemo(
    () => pricing.basePrice + (wantsTreasureHunt ? pricing.addOnPrice : 0),
    [wantsTreasureHunt],
  );

  async function nextStep() {
    const valid = await form.trigger(stepFields[stepIndex], { shouldFocus: true });
    if (valid) {
      setStepIndex((value) => Math.min(value + 1, formSteps.length - 1));
    }
  }

  async function onSubmit(values: OrderFormValues) {
    localStorage.setItem('cli-gift-last-order', JSON.stringify(values));
    localStorage.removeItem(storageKey);
    navigate('/thank-you');
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.72fr_0.28fr]">
      <Panel className="p-5 sm:p-8">
        <div className="flex flex-wrap gap-3">
          {formSteps.map((step, index) => (
            <div
              className="flex min-w-[120px] items-center gap-3 rounded-2xl border border-white/5 bg-black/20 px-4 py-3"
              key={step.id}
            >
              <div
                className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-medium ${
                  index <= stepIndex ? 'bg-accent text-canvas' : 'bg-panelAlt text-inkMuted'
                }`}
              >
                {index + 1}
              </div>
              <span className={`text-sm ${index === stepIndex ? 'text-ink' : 'text-inkMuted'}`}>
                {step.label}
              </span>
            </div>
          ))}
        </div>

        <form className="mt-8 space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          {stepIndex === 0 ? (
            <div className="grid gap-5 md:grid-cols-2">
              <Field error={form.formState.errors.yourName?.message} label="Your name">
                <input className={inputClasses()} {...form.register('yourName')} placeholder="Alex" />
              </Field>
              <Field error={form.formState.errors.contact?.message} label="Email or WhatsApp">
                <input className={inputClasses()} {...form.register('contact')} placeholder="alex@email.com" />
              </Field>
              <Field error={form.formState.errors.recipientName?.message} label="Recipient name">
                <input className={inputClasses()} {...form.register('recipientName')} placeholder="Jordan" />
              </Field>
              <Field error={form.formState.errors.occasion?.message} label="Occasion">
                <select className={inputClasses()} {...form.register('occasion')}>
                  {occasionOptions.map((occasion) => (
                    <option key={occasion} value={occasion}>
                      {occasion}
                    </option>
                  ))}
                </select>
              </Field>
              <Field
                error={form.formState.errors.deadline?.message}
                hint="Use the date you want the experience ready by."
                label="Deadline / target date"
              >
                <input className={inputClasses()} type="date" {...form.register('deadline')} />
              </Field>
            </div>
          ) : null}

          {stepIndex === 1 ? (
            <div className="grid gap-5 md:grid-cols-2">
              <Field error={form.formState.errors.tone?.message} label="Tone">
                <select className={inputClasses()} {...form.register('tone')}>
                  {toneOptions.map((tone) => (
                    <option key={tone} value={tone}>
                      {tone}
                    </option>
                  ))}
                </select>
              </Field>
              <Field error={form.formState.errors.difficulty?.message} label="Difficulty">
                <select className={inputClasses()} {...form.register('difficulty')}>
                  {['1', '2', '3', '4', '5'].map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </Field>
              <Field error={form.formState.errors.experienceType?.message} label="Experience type">
                <select className={inputClasses()} {...form.register('experienceType')}>
                  {experienceOptions.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </Field>
              <Field error={form.formState.errors.length?.message} label="Length">
                <select className={inputClasses()} {...form.register('length')}>
                  <option value="short">short</option>
                  <option value="medium">medium</option>
                </select>
              </Field>
            </div>
          ) : null}

          {stepIndex === 2 ? (
            <div className="grid gap-5">
              <Field error={form.formState.errors.relationship?.message} label="Relationship to recipient">
                <input
                  className={inputClasses()}
                  {...form.register('relationship')}
                  placeholder="Partner, best friend, sister..."
                />
              </Field>
              <Field
                error={form.formState.errors.memories?.message}
                hint="Include 3 to 6 memories, inside jokes, references, or facts."
                label="Personal details"
              >
                <textarea
                  className={`${inputClasses()} min-h-36`}
                  {...form.register('memories')}
                  placeholder="Lisbon trip. Their obsession with peach sweets. The nickname only you use..."
                />
              </Field>
              <Field error={form.formState.errors.finalMessage?.message} label="Final message or reveal">
                <textarea
                  className={`${inputClasses()} min-h-28`}
                  {...form.register('finalMessage')}
                  placeholder="Happy birthday. Your actual gift is waiting under the record player."
                />
              </Field>
              <Field error={form.formState.errors.avoid?.message} label="Anything to avoid">
                <textarea
                  className={`${inputClasses()} min-h-24`}
                  {...form.register('avoid')}
                  placeholder="No references to age, avoid work jokes, keep it gentle..."
                />
              </Field>
            </div>
          ) : null}

          {stepIndex === 3 ? (
            <div className="grid gap-5 md:grid-cols-2">
              <Field error={form.formState.errors.usePhysicalGifts?.message} label="Use with physical gifts?">
                <select className={inputClasses()} {...form.register('usePhysicalGifts')}>
                  <option value="no">no</option>
                  <option value="yes">yes</option>
                </select>
              </Field>
              <div className="rounded-2xl border border-accent/10 bg-accent/5 p-4 text-sm leading-6 text-inkMuted">
                Choose this if the browser experience should guide someone through real-world clues, hidden items, or a final reveal location.
              </div>
              <Field error={form.formState.errors.clueStops?.message} label="How many clue stops?">
                <input className={inputClasses()} {...form.register('clueStops')} placeholder="3 stops" />
              </Field>
              <Field error={form.formState.errors.finalLocation?.message} label="Final reveal location">
                <input
                  className={inputClasses()}
                  {...form.register('finalLocation')}
                  placeholder="Inside the coat closet"
                />
              </Field>
              <Field error={form.formState.errors.hidingPlaces?.message} label="Available hiding places">
                <textarea
                  className={`${inputClasses()} min-h-28`}
                  {...form.register('hidingPlaces')}
                  placeholder="Desk drawer, bookshelf, under the couch..."
                />
              </Field>
              <Field error={form.formState.errors.avoidLocations?.message} label="Locations to avoid">
                <textarea
                  className={`${inputClasses()} min-h-28`}
                  {...form.register('avoidLocations')}
                  placeholder="Avoid the kitchen and the car."
                />
              </Field>
              {!wantsTreasureHunt ? (
                <div className="md:col-span-2 rounded-2xl border border-dashed border-line px-4 py-5 text-sm text-inkMuted">
                  Leave these details light if you are ordering a message-led or puzzle-led experience. They become required once the experience is tied to real-world clues.
                </div>
              ) : null}
            </div>
          ) : null}

          {stepIndex === 4 ? (
            <div className="grid gap-5">
              <Field error={form.formState.errors.contactMethod?.message} label="Preferred contact method">
                <select className={inputClasses()} {...form.register('contactMethod')}>
                  <option value="email">email</option>
                  <option value="whatsapp">whatsapp</option>
                </select>
              </Field>
              <label className="flex items-start gap-3 rounded-2xl border border-line bg-black/20 p-4">
                <input className="mt-1" type="checkbox" {...form.register('budgetAck')} />
                <span className="text-sm leading-6 text-inkMuted">
                  I understand the base experience is {currency(pricing.basePrice)}, with an optional treasure hunt integration of {currency(pricing.addOnPrice)}.
                </span>
              </label>
              {form.formState.errors.budgetAck?.message ? (
                <span className="text-xs text-danger">{form.formState.errors.budgetAck.message}</span>
              ) : null}
              <label className="flex items-start gap-3 rounded-2xl border border-line bg-black/20 p-4">
                <input className="mt-1" type="checkbox" {...form.register('scopeAck')} />
                <span className="text-sm leading-6 text-inkMuted">
                  I understand this follows a fixed-format CLI gift experience and is not open-ended custom game development.
                </span>
              </label>
              {form.formState.errors.scopeAck?.message ? (
                <span className="text-xs text-danger">{form.formState.errors.scopeAck.message}</span>
              ) : null}
            </div>
          ) : null}

          <div className="flex flex-col gap-4 border-t border-white/5 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-3">
              <Button
                className="gap-2"
                onClick={() => setStepIndex((value) => Math.max(value - 1, 0))}
                type="button"
                variant="secondary"
              >
                <ChevronLeft size={16} />
                Back
              </Button>
              {stepIndex < formSteps.length - 1 ? (
                <Button className="gap-2" onClick={nextStep} type="button">
                  Next
                  <ChevronRight size={16} />
                </Button>
              ) : (
                <Button type="submit">Submit brief</Button>
              )}
            </div>
            <p className="text-sm text-inkMuted">Draft autosaves locally while you fill it in.</p>
          </div>
        </form>
      </Panel>

      <div className="space-y-6">
        <Panel>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent/80">Quote preview</p>
          <div className="mt-4 flex items-end justify-between">
            <div>
              <p className="text-sm text-inkMuted">Estimated total</p>
              <p className="mt-2 text-4xl font-semibold text-ink">{currency(totalPrice)}</p>
            </div>
            <p className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] text-accent">
              Fixed scope
            </p>
          </div>
          <div className="mt-6 space-y-3 text-sm leading-6 text-inkMuted">
            <p>Base experience: {currency(pricing.basePrice)}</p>
            <p>Treasure hunt add-on: {currency(pricing.addOnPrice)} {wantsTreasureHunt ? '(included)' : '(optional)'}</p>
          </div>
        </Panel>

        <Panel>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent/80">What happens next</p>
          <div className="mt-4 space-y-4 text-sm leading-6 text-inkMuted">
            <p>1. I review the brief and confirm timing.</p>
            <p>2. I follow up if any details are missing.</p>
            <p>3. The experience is built in the fixed CLI format.</p>
            <p>4. You get the link and one revision pass.</p>
          </div>
        </Panel>
      </div>
    </div>
  );
}
