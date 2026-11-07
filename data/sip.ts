export interface SipBrand {
  name: string;
  wordmark: string;
  product: string;
  volume: string;
  tagline: string;
}

export interface SipPacker {
  name: string;
  short: string;
  wordmark: string;
  tagline: string;
  positioning: string;
  place: string;
  href: string;
}

export interface SipNavItem {
  label: string;
  href: string;
}

export interface SipStat {
  value: string;
  unit: string;
  label: string;
}

export type FruitType = "coconut" | "mango" | "guava" | "lychee" | "pineapple" | "lime";

export interface Flavour {
  id: string;
  name: string;
  short: string;
  notes: string;
  kcal: number;
  bg: string;
  ink: string;
  accent: string;
  tint: string;
  fruit: FruitType;
}

export interface NutritionRow {
  label: string;
  value: string;
  indent?: boolean;
}

export interface Review {
  quote: string;
  author: string;
  city: string;
}

export const sipBrand: SipBrand = {
  name: "BR-Nario",
  wordmark: "BR-NARIO",
  product: "Tender coconut water",
  volume: "250 ml",
  tagline: "The real source of every sip.",
};

export const sipPacker: SipPacker = {
  name: "Fluteworks Packaging",
  short: "Fluteworks",
  wordmark: "FLUTEWORKS",
  tagline: "Corrugated boxes & mono cartons",
  positioning: "Corrugated shippers and mono cartons — designed, printed, converted and tested under one roof.",
  place: "India",
  href: "#sip-story",
};

export const sipNav: SipNavItem[] = [
  { label: "Story", href: "#sip-story" },
  { label: "Flavours", href: "#sip-flavours" },
  { label: "Health", href: "#sip-health" },
  { label: "Reviews", href: "#sip-reviews" },
];

export const sipStats: SipStat[] = [
  { value: "500", unit: "mg", label: "Potassium per can" },
  { value: "100", unit: "%", label: "Natural hydration" },
  { value: "0", unit: "g", label: "Added sugar" },
  { value: "45", unit: "kcal", label: "Per 250 ml can" },
];

export const sipStages: string[] = [
  "Whole coconut",
  "Cracked open",
  "Canned",
  "Packed",
];

export const flavours: Flavour[] = [
  {
    id: "original",
    name: "Coconut",
    short: "Original",
    notes: "One green coconut, opened and pressed within a day of harvest.",
    kcal: 45,
    bg: "#f5f3ee",
    ink: "#1f3328",
    accent: "#2f4a3c",
    tint: "#e4e9dc",
    fruit: "coconut",
  },
  {
    id: "mango",
    name: "Mango",
    short: "Alphonso",
    notes: "Ratnagiri Alphonso pulp folded into cold-pressed coconut water.",
    kcal: 62,
    bg: "#fbefd9",
    ink: "#3b2a12",
    accent: "#e39a2d",
    tint: "#f4e4c4",
    fruit: "mango",
  },
  {
    id: "guava",
    name: "Pink guava",
    short: "Pink guava",
    notes: "Blush-pink guava with a gentle, floral finish.",
    kcal: 58,
    bg: "#f9e3de",
    ink: "#3d1f1c",
    accent: "#d9665f",
    tint: "#f1d6d0",
    fruit: "guava",
  },
  {
    id: "lychee",
    name: "Lychee",
    short: "Lychee",
    notes: "Muzaffarpur lychee — perfumed, bright and barely sweet.",
    kcal: 55,
    bg: "#f4e6ee",
    ink: "#35202c",
    accent: "#b9668f",
    tint: "#ecdbe4",
    fruit: "lychee",
  },
  {
    id: "pineapple",
    name: "Pineapple",
    short: "Pineapple",
    notes: "Sun-ripe pineapple for a sharper, tropical edge.",
    kcal: 57,
    bg: "#f7f0cf",
    ink: "#33300f",
    accent: "#c9a72a",
    tint: "#efe7c1",
    fruit: "pineapple",
  },
  {
    id: "lime",
    name: "Lime & mint",
    short: "Lime & mint",
    notes: "Squeezed lime and garden mint. The one for hot afternoons.",
    kcal: 48,
    bg: "#e6f0dd",
    ink: "#1d3320",
    accent: "#5f9a4e",
    tint: "#d9e6d0",
    fruit: "lime",
  },
];

export function getIngredients(flavour: Flavour): string[] {
  if (flavour.fruit === "coconut") {
    return ["Tender coconut water (100%)."];
  }
  return [
    "Tender coconut water (88%),",
    `${flavour.name.toLowerCase()} pulp / juice (12%).`,
  ];
}

export function getNutrition(flavour?: Flavour): NutritionRow[] {
  const energyKcal = flavour ? flavour.kcal : 45;
  return [
    { label: "Energy", value: `${energyKcal} kcal` },
    { label: "Carbohydrate", value: "10.5 g" },
    { label: "  of which sugars*", value: "9.0 g", indent: true },
    { label: "Added sugar", value: "0 g" },
    { label: "Fat", value: "0 g" },
    { label: "Protein", value: "0.4 g" },
    { label: "Potassium", value: "500 mg" },
    { label: "Sodium", value: "62 mg" },
  ];
}

export const reviews: Review[] = [
  {
    quote: "It tastes like the coconut the vendor opens for you on the beach — not like something that sat in a warehouse.",
    author: "Ananya R.",
    city: "Bengaluru",
  },
  {
    quote: "I swapped my afternoon soda for the lime & mint. Three weeks in, I don't miss it at all.",
    author: "Kabir S.",
    city: "Mumbai",
  },
  {
    quote: "Post-run, this is the only thing I reach for. Light, salty-sweet and properly cold.",
    author: "Meera J.",
    city: "Pune",
  },
  {
    quote: "The crate arrived in a box sturdy enough to reuse. Not one dented can across two orders.",
    author: "Rohan D.",
    city: "Gurugram",
  },
  {
    quote: "Pink guava is dangerous. My kids and I fight over the last can every weekend.",
    author: "Farah K.",
    city: "Hyderabad",
  },
];
