import type { Metadata } from "next";
import { Bodoni_Moda, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

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
  title: "L'Élixir Doré — Midnight Velvet & Silver",
  description:
    "Une expérience immersive où le velours de minuit rencontre l'éclat de l'argent. Cocktails signatures et mixologie moderne.",
};

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
        <SmoothScrollProvider>
          <Navbar />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
