import { Gift, HeartHandshake, KeyRound, LockKeyhole, Search } from 'lucide-react';

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Demos', href: '/demos' },
  { label: 'About', href: '/about' },
  { label: 'Order', href: '/order' },
];

export const heroTabs = [
  {
    id: 'birthday',
    label: 'Birthday',
    lines: [
      '> booting surprise.exe',
      '> profile: taylor / 29 / trusted user',
      '> puzzle chain armed',
      '> clue_01 unlocked: check the cake box',
      '> reward pending...',
    ],
  },
  {
    id: 'anniversary',
    label: 'Anniversary',
    lines: [
      '> memory vault initialized',
      '> pair_key accepted',
      '> note_01 restored: lisbon, rain, red wine',
      '> final prompt armed',
      '> reveal status: waiting for your enter key',
    ],
  },
  {
    id: 'hunt',
    label: 'Gift Hunt',
    lines: [
      '> gift_hunt protocol online',
      '> token accepted: brass-key-17',
      '> next location: desk drawer / left side',
      '> hidden package count: 2 remaining',
      '> final reveal location encrypted',
    ],
  },
];

export const valueCards = [
  {
    title: 'Personal',
    copy: 'Built around one specific person, with names, memories, tone, and reveal copy tailored to them.',
    icon: HeartHandshake,
  },
  {
    title: 'Playable',
    copy: 'A gift that unfolds through clues, prompts, and unlock moments instead of a static message.',
    icon: KeyRound,
  },
  {
    title: 'Simple to send',
    copy: 'Delivered as a browser link you can message directly or use alongside a real-world surprise.',
    icon: Gift,
  },
];

export const useCases = [
  {
    title: 'Birthday surprise',
    copy: 'A playful terminal with a custom intro, a short unlock flow, and a final message or reveal.',
  },
  {
    title: 'Anniversary / partner gift',
    copy: 'A softer, memory-led experience with private references, notes, and a more intimate tone.',
  },
  {
    title: 'Real-world treasure hunt',
    copy: 'A token-and-password flow that guides someone through clues tied to hidden gifts or locations.',
  },
  {
    title: 'Proposal setup',
    copy: 'A polished sequence that builds anticipation before landing on the question or final reveal.',
  },
];

export const demos = [
  {
    slug: 'birthday-recovery-console',
    title: 'Birthday Recovery Console',
    useCase: 'Birthday surprise',
    summary: 'A playful birthday terminal with clue unlocks and a final reveal.',
    preview: [
      'recovering celebration assets...',
      'candles.synced',
      'gift channel open',
      'clue_02: check the blue envelope',
    ],
  },
  {
    slug: 'anniversary-vault',
    title: 'Anniversary Vault',
    useCase: 'Anniversary / partner gift',
    summary: 'A softer, message-driven terminal experience built around memories and unlockable notes.',
    preview: [
      'vault pair recognized',
      'memory_01: first train trip',
      'memory_02: 2am milkshakes',
      'final note armed',
    ],
  },
  {
    slug: 'surprise-gift-hunt',
    title: 'Surprise Gift Hunt',
    useCase: 'Treasure hunt',
    summary: 'A guided clue-and-token terminal designed to work with physical hidden gifts.',
    preview: [
      'gift_hunt online',
      'token accepted',
      'next stop: bookshelf / lower shelf',
      'package count remaining: 1',
    ],
  },
];

export const processSteps = [
  'Fill in the brief with names, occasion, tone, and the details that make the experience feel personal.',
  'Choose the vibe, difficulty, and whether it is mainly message-led or tied to a real-world gift hunt.',
  'I build the experience in the fixed CLI gift format and send it for one revision pass.',
  'You send the link, or use it to guide the recipient through the surprise in real life.',
];

export const pricing = {
  basePrice: 750,
  addOnPrice: 250,
  includes: [
    'Personalized terminal-style browser experience',
    'Custom name, tone, intro, and final message',
    'Short puzzle or unlock flow',
    'One round of revisions',
    'Delivery as a browser link',
  ],
  addOnIncludes: [
    'Clues designed around physical gifts or locations',
    'Token or password flow for real-world progression',
  ],
};

export const faqItems = [
  {
    question: 'How long is each experience?',
    answer:
      'The base format is intentionally short. Most experiences are designed to feel polished and memorable in a few minutes, not like a long game.',
  },
  {
    question: 'Is it mobile-friendly?',
    answer:
      'Yes. The experience is delivered as a browser link and is designed to feel good on both phones and desktops.',
  },
  {
    question: 'How custom is it?',
    answer:
      'Names, tone, intro copy, inside jokes, memories, and the final reveal are personalized. The format stays fixed so the process stays clear and reliable.',
  },
  {
    question: 'Can it work with physical gifts or clue stops?',
    answer:
      'Yes. The treasure hunt add-on is for linking the browser experience to real-world hiding spots, clue stops, or a final reveal location.',
  },
  {
    question: 'What happens after I submit the form?',
    answer:
      'You will get a confirmation and then I will follow up on the preferred contact method to confirm details, timing, and delivery.',
  },
];

export const aboutPoints = [
  {
    title: 'A small studio',
    copy: 'This is a focused small studio built around one offer: thoughtful digital gifts that feel crafted rather than mass-produced.',
  },
  {
    title: 'Why terminal-style',
    copy: 'The command-line aesthetic gives the experience structure, charm, and a lightly nerdy edge without turning the gift into a parody.',
  },
  {
    title: 'Who it is for',
    copy: 'People who want the gift itself to feel personal and memorable, especially for partners, close friends, birthdays, and surprise reveals.',
  },
];

export const footerBlurb =
  'Custom terminal-style browser gifts for birthdays, anniversaries, proposals, and surprise reveals.';

export const pageIntros = {
  demos: {
    eyebrow: 'Demo gallery',
    title: 'Three sample directions, one fixed product.',
    copy: 'These previews show the tone, pacing, and structure of a CLI gift experience. They are examples to help someone imagine their own version.',
  },
  about: {
    eyebrow: 'About the studio',
    title: 'A small creative studio making playable gift experiences.',
    copy: 'This is not an agency and it is not a game studio menu. It is one carefully scoped offer, built to feel personal, polished, and gift-worthy.',
  },
  order: {
    eyebrow: 'Start your brief',
    title: 'Tell me who it is for and what should make it feel theirs.',
    copy: 'The brief is structured on purpose. It keeps the project clear, keeps the scope tight, and makes it easier to build something that feels considered.',
  },
  thankYou: {
    eyebrow: 'Request received',
    title: 'Your CLI gift brief is in the queue.',
    copy: 'Next I will review the details and follow up on your preferred contact method to confirm timing, any missing context, and the build schedule.',
  },
};

export const occasionOptions = [
  'Birthday',
  'Anniversary',
  'Proposal',
  'Surprise reveal',
  'Treasure hunt',
  'Other special occasion',
];

export const toneOptions = ['funny', 'sweet', 'mysterious', 'romantic', 'nerdy'] as const;

export const experienceOptions = [
  'message-focused',
  'puzzle-focused',
  'treasure-hunt integrated',
] as const;

export const formSteps = [
  { id: 'basics', label: 'Basics' },
  { id: 'setup', label: 'Setup' },
  { id: 'personal', label: 'Personal details' },
  { id: 'hunt', label: 'Treasure hunt' },
  { id: 'logistics', label: 'Logistics' },
];

export const homeHighlights = [
  'One premium-feeling product',
  'Clear fixed pricing',
  'Built for special occasions',
  'Browser-based and easy to send',
];

export const pageBadges = [
  { label: 'One product only', icon: Search },
  { label: 'Fixed scope', icon: LockKeyhole },
];
