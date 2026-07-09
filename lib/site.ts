/* Canonical URLs, the sitemap, and OG tags all need an absolute origin.
   Set NEXT_PUBLIC_SITE_URL in the deploy environment; the fallback only
   keeps local builds coherent. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://www.elixir-dore.fr";

export const siteConfig = {
  name: "L'Élixir Doré",
  tagline: "Midnight Velvet & Silver",
  url: siteUrl,
  locale: "fr_FR",
  description:
    "Bar à cocktails d'exception au cœur du triangle d'or à Paris. Mixologie moderne, spiritueux rares et créations signatures dans un écrin de velours minuit.",
  email: "contact@elixir-dore.fr",
  telephone: "+33123456789",
  address: {
    street: "18 Avenue de la Nuit Éternelle",
    locality: "Paris",
    postalCode: "75008",
    country: "FR",
  },
  geo: { latitude: 48.8738, longitude: 2.3014 },
  /* Mirrors the Horaires card in Contact-Section. */
  hours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "18:00", closes: "02:00" },
    { days: ["Friday"], opens: "18:00", closes: "04:00" },
    { days: ["Saturday"], opens: "19:00", closes: "05:00" },
  ],
  ogImage: {
    url: "/hero-bg.png",
    width: 1024,
    height: 1024,
    alt: "L'Élixir Doré — bar à cocktails, Paris",
  },
} as const;

export const routes = [
  { path: "/", changeFrequency: "monthly" as const, priority: 1 },
  { path: "/cocktails", changeFrequency: "weekly" as const, priority: 0.8 },
];
