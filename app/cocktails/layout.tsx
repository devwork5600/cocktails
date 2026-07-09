import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

const title = "La Carte des Élixirs";
const description =
  "Découvrez la carte de L'Élixir Doré : cocktails signatures, classiques revisités et créations sans alcool, élaborés avec des spiritueux rares.";

/* page.tsx is a Client Component and cannot export metadata, so the
   segment layout carries it. */
export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/cocktails",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: `${siteConfig.url}/cocktails`,
    siteName: siteConfig.name,
    title: `${title} — ${siteConfig.name}`,
    description,
    images: [
      {
        url: "/signature-cocktail.png",
        alt: "Cocktails signatures de L'Élixir Doré",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} — ${siteConfig.name}`,
    description,
    images: ["/signature-cocktail.png"],
  },
};

export default function CocktailsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
