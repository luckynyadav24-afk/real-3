// Centralized image library. Pexels CDN URLs built from photo ids.
const px = (id: number, ext: "jpeg" | "png" = "jpeg", w = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.${ext}?auto=compress&cs=tinysrgb&w=${w}`;

export const IMG = {
  heroLiving: px(27604139, "png", 2000),
  heroAlt: px(27604107, "png", 1800),
  aboutStudio: px(6283971, "jpeg", 1400),
  aboutFounder: px(6568669, "jpeg", 900),
  aboutSecondary: px(36286291, "jpeg", 1000),
  contactBg: px(1579262, "jpeg", 1800),
  room360: px(27604107, "png", 2400),
};

export interface Project {
  id: string;
  title: string;
  place: string;
  category: string;
  year: string;
  img: string;
}

export const PROJECTS: Project[] = [
  {
    id: "lumiere",
    title: "Lumière Residence",
    place: "Monaco",
    category: "Living",
    year: "2025",
    img: px(27604107, "png", 1500),
  },
  {
    id: "noir",
    title: "Noir Culinary Atelier",
    place: "Milan",
    category: "Kitchen",
    year: "2024",
    img: px(35021550, "jpeg", 1500),
  },
  {
    id: "sanctuary",
    title: "Marble Sanctuary",
    place: "Dubai",
    category: "Bath",
    year: "2025",
    img: px(7166637, "jpeg", 1500),
  },
  {
    id: "velvet",
    title: "Velvet Suite",
    place: "Paris",
    category: "Bedroom",
    year: "2024",
    img: px(8135529, "jpeg", 1500),
  },
  {
    id: "foyer",
    title: "Grand Foyer",
    place: "London",
    category: "Foyer",
    year: "2025",
    img: px(6283971, "jpeg", 1500),
  },
  {
    id: "amber",
    title: "Amber Lounge",
    place: "Geneva",
    category: "Living",
    year: "2023",
    img: px(16985123, "jpeg", 1500),
  },
];

export const BEFORE_AFTER = {
  before: px(38183828, "jpeg", 1600),
  after: px(35021550, "jpeg", 1600),
};

export const SERVICES = [
  {
    n: "01",
    title: "Architectural Interiors",
    desc: "Full-spectrum spatial design — from structural reimagining to the final sculpted detail.",
    icon: "compass",
  },
  {
    n: "02",
    title: "Bespoke Furniture",
    desc: "Hand-crafted, one-of-a-kind pieces produced with master European ateliers.",
    icon: "sofa",
  },
  {
    n: "03",
    title: "Lighting Design",
    desc: "Cinematic illumination studies that sculpt atmosphere and emotion in every room.",
    icon: "bulb",
  },
  {
    n: "04",
    title: "Art & Curation",
    desc: "Curated collections of fine art, sculpture and objects that define a collection.",
    icon: "diamond",
  },
  {
    n: "05",
    title: "Material Atelier",
    desc: "Rare marbles, figured woods and brushed metals sourced from heritage quarries.",
    icon: "layers",
  },
  {
    n: "06",
    title: "Concierge Realisation",
    desc: "White-glove project management from first sketch to the final reveal.",
    icon: "key",
  },
];

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Isabella Moreau",
    role: "Private Client · Monaco",
    quote:
      "They did not design a room — they composed a way of living. Every dawn in our penthouse feels cinematic.",
    avatar: px(9064781, "jpeg", 400),
  },
  {
    name: "Alessandro Ricci",
    role: "Hotelier · Milan",
    quote:
      "An atelier obsessed with the millimetre. The light alone in our lobby won us three international awards.",
    avatar: px(38139772, "jpeg", 400),
  },
  {
    name: "Sophia Laurent",
    role: "Collector · Paris",
    quote:
      "Discretion, rigour, and an eye that borders on the divine. Maison Lumière is simply without equal.",
    avatar: px(6568669, "jpeg", 400),
  },
];

export const STATS = [
  { value: "18", suffix: "yrs", label: "Of Craft" },
  { value: "240", suffix: "+", label: "Projects Realised" },
  { value: "32", suffix: "", label: "Design Awards" },
  { value: "11", suffix: "", label: "Countries" },
];

export const AWARDS = [
  "Awwwards · Site of the Year",
  "AD100 Honoree",
  "Dezeen Awards · Winner",
  "Elle Decor · A-List",
  "Andrew Martin · Intl. Designer",
  "IDA Gold · Interior",
  "Wallpaper* Design Award",
  "Frame Award · Concept",
];
