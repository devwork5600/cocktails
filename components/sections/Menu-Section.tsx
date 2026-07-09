"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type MenuImage = {
  src: string;
  alt: string;
  title: string;
  position?: string;
};

const menuImages: MenuImage[] = [
  { src: "/signature-cocktail.png", alt: "Signature Cocktail", title: "L'Or Liquide" },
  { src: "/cocktail-1.png", alt: "Smoked Cocktail", title: "Élixir de Minuit" },
  { src: "/cocktail-2.png", alt: "Hibiscus Creation", title: "Sillage d'Orient" },
  { src: "/cocktail-3.png", alt: "Gold Martini", title: "Pureté Dorée" },
  { src: "/hero-bg.png", alt: "Bar Atmosphere", title: "L'Ordre des Flacons", position: "object-bottom" },
  { src: "/cocktail-6.png", alt: "Amber Whiskey", title: "L'Héritage", position: "object-center" },
];

export function MenuSection() {
  return (
    <section id="menu" className="py-24 md:py-40 bg-surface">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col gap-16">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="flex flex-col gap-4 max-w-2xl">
              <span className="text-label-caps text-secondary tracking-[0.2em]">
                Collections & Créations
              </span>
              <h2 className="text-display-lg text-on-surface">
                Un voyage <br />
                <span className="italic text-secondary">à travers les sens</span>
              </h2>
              <p className="text-body-lg text-on-surface-variant font-light leading-relaxed mt-4">
                Découvrez notre sélection éphémère. Chaque cocktail est une œuvre d&apos;art,
                conçue avec des spiritueux rares et des ingrédients sourcés avec le plus grand soin.
              </p>
            </div>
            <Link href="/cocktails" className="hairline text-on-surface font-sans text-xs font-bold uppercase tracking-widest px-12 py-5 rounded-md hover:bg-on-surface/5 transition-all hidden md:block">
              Voir la carte complète
            </Link>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuImages.map((image: MenuImage, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative aspect-4/5 rounded-md overflow-hidden hairline bg-surface-container"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={`object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 ${image.position || "object-center"}`}
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-primary font-serif italic text-2xl">
                    {image.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <Link href="/la-carte" className="hairline text-on-surface font-sans text-xs font-bold uppercase tracking-widest px-12 py-5 rounded-md hover:bg-on-surface/5 transition-all md:hidden w-full text-center">
            Voir la carte complète
          </Link>
        </div>
      </div>
    </section>
  );
}
