import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { siteConfig } from "@/lib/site";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Bar à cocktails d'exception à Paris`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "bar à cocktails Paris",
    "mixologie",
    "cocktails signatures",
    "spiritueux rares",
    "privatisation bar Paris",
    "speakeasy Paris 8",
    "L'Élixir Doré",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Bar à cocktails d'exception à Paris`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage.url,
        width: siteConfig.ogImage.width,
        height: siteConfig.ogImage.height,
        alt: siteConfig.ogImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Bar à cocktails d'exception à Paris`,
    description: siteConfig.description,
    images: [siteConfig.ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "restaurant",
  formatDetection: {
    telephone: true,
    address: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0c14",
  colorScheme: "dark",
};

/* schema.org BarOrPub — lets Google surface hours, address and phone
   directly in local results. Values mirror lib/site.ts. */
function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BarOrPub",
    "@id": `${siteConfig.url}/#bar`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.telephone,
    email: siteConfig.email,
    image: `${siteConfig.url}${siteConfig.ogImage.url}`,
    priceRange: "€€€",
    servesCuisine: "Cocktails",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: siteConfig.hours.map((slot) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: slot.days,
      opens: slot.opens,
      closes: slot.closes,
    })),
    hasMenu: `${siteConfig.url}/cocktails`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${bodoni.variable} ${montserrat.variable} h-full antialiased  scrollbar scrollbar-none`}
    >
      <body className="min-h-full flex flex-col">
        <StructuredData />
        <SmoothScrollProvider>
          <Navbar />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
