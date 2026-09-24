import type { FlavorConfig, Ingredient, Review, NavItem, TeamMember, Stat, FaqItem } from '@/types';

export const ASSET_BASE = 'https://api.getlayers.ai/storage/v1/object/public/public/assets/soda-14ff8a788d';

export const ASSETS = {
  leavesGlb: `${ASSET_BASE}/leaves.glb`,
  cherryGlb: `${ASSET_BASE}/cherry.glb`,
  blueberryGlb: `${ASSET_BASE}/blueberry.glb`,
  canGlb: `${ASSET_BASE}/deit_soda2.glb`,
  greenSodaPng: `${ASSET_BASE}/Green%20Soda.png`,
  blueSodaPng: `${ASSET_BASE}/Blue%20Soda.png`,
  greenBaseColor: `${ASSET_BASE}/green%20base%20color.jpg`,
  blueBaseColor: `${ASSET_BASE}/blue%20base%20color.jpg`,
  bubblePng: `${ASSET_BASE}/bubble.png`,
};

export const FLAVORS: FlavorConfig[] = [
  {
    id: 'classic',
    name: 'Diet Classic',
    price: '$2.99',
    description: 'The original zero-sugar formula. Crisp, clean, unmistakably refreshing.',
    tagline: 'The Original',
    imageSrc: ASSETS.greenSodaPng,
    bgInner: '#0b8a78',
    bgMid: '#044e3b',
    bgOuter: '#011411',
    themeClass: '',
  },
  {
    id: 'blue',
    name: 'Zero Lime',
    price: '$2.99',
    description: 'A bright citrus twist on zero sugar. Bold, tangy, and ice-cold refreshing.',
    tagline: 'Citrus Edition',
    imageSrc: ASSETS.blueSodaPng,
    bgInner: '#0b4f8a',
    bgMid: '#04294e',
    bgOuter: '#010c14',
    themeClass: 'blue-theme',
  },
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Ingredients', href: '/ingredients' },
  { label: 'Flavors', href: '/flavors' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'About', href: '/about' },
];

export const INGREDIENTS: Ingredient[] = [
  {
    id: '1',
    name: 'Purified Water',
    description: 'Triple-filtered mountain spring water forms the pure base of every can.',
    icon: '💧',
    benefit: 'Hydration without compromise',
    color: '#0ea5e9',
  },
  {
    id: '2',
    name: 'Natural Flavors',
    description: 'Real fruit extracts — no artificial masking agents, just pure botanical essence.',
    icon: '🍃',
    benefit: 'Authentically flavored',
    color: '#22c55e',
  },
  {
    id: '3',
    name: 'Citric Acid',
    description: 'Derived from citrus fruits, it delivers that perfect tart balance to every sip.',
    icon: '🍋',
    benefit: 'Natural tartness & preservation',
    color: '#eab308',
  },
  {
    id: '4',
    name: 'Carbonation',
    description: 'Precisely calibrated CO₂ levels for the ideal effervescence — not too sharp, never flat.',
    icon: '✨',
    benefit: 'The perfect fizz',
    color: '#a855f7',
  },
  {
    id: '5',
    name: 'Stevia Extract',
    description: 'Zero-glycemic sweetness from the stevia leaf. No blood sugar spike, ever.',
    icon: '🌿',
    benefit: 'Zero sugar, zero guilt',
    color: '#10b981',
  },
  {
    id: '6',
    name: 'Potassium Citrate',
    description: 'A natural mineral salt that smooths the finish and balances the pH of every can.',
    icon: '⚗️',
    benefit: 'Smooth, balanced finish',
    color: '#f97316',
  },
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Mara Jensen',
    handle: '@maraj',
    avatar: 'MJ',
    rating: 5,
    text: "I've tried every zero-sugar soda on the market. Nothing comes close to Diet Classic. The finish is clean, not that weird chemical aftertaste. This is the one.",
    flavor: 'classic',
    date: 'Aug 2025',
  },
  {
    id: '2',
    name: 'Theo Nakamura',
    handle: '@theook',
    avatar: 'TN',
    rating: 5,
    text: "Zero Lime is genuinely incredible. Cracked one open on a hot afternoon and it tasted like summer in a can. The carbonation level is perfect — assertive without being aggressive.",
    flavor: 'blue',
    date: 'Jul 2025',
  },
  {
    id: '3',
    name: 'Priya Mehta',
    handle: '@priyam',
    avatar: 'PM',
    rating: 5,
    text: "The can design alone made me buy it. Then I tasted it and now I order by the case. Diet Classic is my daily afternoon ritual.",
    flavor: 'classic',
    date: 'Sep 2025',
  },
  {
    id: '4',
    name: 'Luis Carvalho',
    handle: '@luisc',
    avatar: 'LC',
    rating: 4,
    text: "Zero Lime is boldly citrusy without being syrupy. Pairs incredibly well with food. My go-to at the dinner table now.",
    flavor: 'blue',
    date: 'Aug 2025',
  },
  {
    id: '5',
    name: 'Sofia Elias',
    handle: '@sofiae',
    avatar: 'SE',
    rating: 5,
    text: "Finally a soda brand that takes design as seriously as flavor. Both are exceptional — I keep a case of each.",
    flavor: 'classic',
    date: 'Sep 2025',
  },
  {
    id: '6',
    name: 'James Wu',
    handle: '@jameswu',
    avatar: 'JW',
    rating: 5,
    text: "The stevia sweetness is so well-calibrated. It doesn't linger or go bitter. Honestly impressed — and I'm picky about this stuff.",
    flavor: 'blue',
    date: 'Jul 2025',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Aria Voss',
    role: 'Founder & Chief Flavor Scientist',
    bio: 'Former food chemist with 15 years in beverage R&D. Obsessed with the gap between what zero-sugar drinks taste like and what they could.',
  },
  {
    name: 'Kai Brennan',
    role: 'Head of Design',
    bio: 'Industrial designer who spent a decade at a leading packaging studio before co-creating Diet Soda\'s signature can geometry.',
  },
  {
    name: 'Nadia Torres',
    role: 'Director of Sustainability',
    bio: 'Environmental scientist guiding Diet Soda toward fully carbon-neutral manufacturing by 2027.',
  },
];

export const STATS: Stat[] = [
  { value: '0g', label: 'Sugar per can' },
  { value: '5', label: 'Natural ingredients' },
  { value: '2M+', label: 'Cans sold in 2025' },
  { value: '100%', label: 'Recyclable packaging' },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Is Diet Soda really zero sugar?',
    answer: 'Yes — 0g of sugar, 0g of carbohydrates. We sweeten exclusively with stevia leaf extract, a natural, zero-glycemic sweetener.',
  },
  {
    question: 'What makes the flavors natural?',
    answer: 'We use real botanical extracts and fruit distillates. No synthetic flavor compounds, no artificial color. What you taste is what nature made.',
  },
  {
    question: 'Where is Diet Soda made?',
    answer: 'Our cans are produced at a certified facility in Vermont, using locally sourced water and renewable energy. We ship nationwide.',
  },
  {
    question: 'How is the can sustainable?',
    answer: 'The aluminum can is infinitely recyclable. Our printing uses water-based inks. We offset all shipping emissions through verified reforestation projects.',
  },
  {
    question: 'Can I subscribe for regular deliveries?',
    answer: 'Yes — subscribe and save 15% on any case order. Cancel or pause anytime from your account dashboard.',
  },
];
