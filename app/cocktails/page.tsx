"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useMouse from "@/hook/useMouse";

const categories = [
  {
    name: "Signatures",
    items: [
      {
        name: "L'Or Liquide",
        ingredients: "Bourbon premium, Infusion de Safran, Miel d'Acacia, Bitters aromatiques, Écorce d'orange.",
        description: "Un élixir puissant et velouté aux reflets dorés.",
        price: "22€",
        image: "/cocktail-1.png"
      },
      {
        name: "Élixir de Minuit",
        ingredients: "Cognac VSOP, Liqueur de Framboise Noire, Citron Jaune, Sirop de Vanille fumé au bois de chêne.",
        description: "Une expérience fumée et mystérieuse.",
        price: "20€",
        image: "/cocktail-2.png"
      },
      {
        name: "Sillage d'Orient",
        ingredients: "Gin infusé au Thé Earl Grey, Sirop de Rose, Jus de Lychee, Blanc d'œuf, Pétales séchés.",
        description: "Floral, aérien et d'une élégance rare.",
        price: "19€",
        image: "/cocktail-3.png"
      }
    ]
  },
  {
    name: "Les Classiques Revisités",
    items: [
      {
        name: "Old Fashioned Studio",
        ingredients: "Rye Whiskey, Sirop d'Érable fumé, Bitters de Noix, Zeste de Pamplemousse.",
        description: "La force du whiskey équilibrée par la douceur du bois.",
        price: "18€",
        image: "/signature-cocktail.png"
      },
      {
        name: "Negroni Doré",
        ingredients: "Gin Sec, Vermouth Rouge infusé au Cacao, Campari, Poussière d'Or comestible.",
        description: "L'amertume classique avec une touche de luxe.",
        price: "21€",
        image: "/cocktail-6.png"
      }
    ]
  },
  {
    name: "Sans Alcool (Spiritueux 0%)",
    items: [
      {
        name: "L'Innocence",
        ingredients: "Distillat de Genièvre 0%, Concombre, Menthe Fraîche, Eau Tonique premium.",
        description: "Fraîcheur absolue sans compromis.",
        price: "14€",
        image: "/cocktail-2.png"
      }
    ]
  }
];

// Flatten items to have a stable global list for the slide effect
const allItems = categories.flatMap(cat => cat.items);

export default function LaCartePage() {
  const { x, y } = useMouse();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      {/* Floating Cursor Modal with Sliding Effect */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            style={{
              position: "fixed",
              left: x,
              top: y,
              width: 200,
              height: 200,
              pointerEvents: "none",
              zIndex: 100,
              x: "-50%",
              y: "-50%",
            }}
            className="hidden lg:block overflow-hidden rounded-xl border border-primary/20 shadow-2xl bg-surface-container"
          >
            <motion.div 
              className="relative w-full h-full"
              animate={{ y: hoveredIndex !== null ? -hoveredIndex * 200 : 0 }}
              transition={{ type: "tween", ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            >
              {allItems.map((item, idx) => (
                <div key={`${item.name}-${idx}`} className="relative w-[200px] h-[200px]">
                  <Image
                    src={item.image || "/cocktail-2.png"}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <p className="text-primary font-serif italic text-lg leading-tight">{item.name}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="grow pt-32 pb-24">
        {/* Header */}
        <section className="mb-24">
          <div className="max-w-3xl mx-auto px-6 text-center flex flex-col gap-6">
            <span className="text-label-caps text-primary tracking-[0.3em]">Édition Été 2026</span>
            <h1 className="text-display-lg text-on-surface">La Carte <br /><span className="italic text-primary">des Élixirs</span></h1>
            <p className="text-body-lg text-on-surface-variant font-light leading-relaxed">
              Une sélection méticuleuse de spiritueux rares et de créations originales, 
              élaborées pour éveiller vos sens et suspendre le temps.
            </p>
          </div>
        </section>

        {/* Menu Content */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col gap-24">
            {categories.map((category, catIdx) => {
              // Calculate starting global index for this category
              let startIndex = 0;
              for(let i = 0; i < catIdx; i++) {
                startIndex += categories[i].items.length;
              }

              return (
                <div 
                  key={category.name} 
                  className="flex flex-col gap-12 lg:cursor-none"
                  onMouseEnter={() => {
                    setIsActive(true);
                    // Default to first item of category if none hovered yet
                    if (hoveredIndex === null) setHoveredIndex(startIndex);
                  }}
                  onMouseLeave={() => {
                    setIsActive(false);
                    setHoveredIndex(null);
                  }}
                >
                  <div className="flex items-center gap-6">
                    <h2 className="text-label-caps text-primary tracking-[0.4em] whitespace-nowrap">
                      {category.name}
                    </h2>
                    <div className="h-px w-full bg-outline-variant/30" />
                  </div>

                  <div className="flex flex-col gap-16">
                    {category.items.map((item, itemIdx) => {
                      const globalIdx = startIndex + itemIdx;
                      const displayIndex = (globalIdx + 1).toString().padStart(2, "0");
                      
                      return (
                        <div 
                          key={item.name} 
                          className="group flex flex-col gap-4"
                          onMouseEnter={() => setHoveredIndex(globalIdx)}
                        >
                          {/* Mobile-only Cocktail Image */}
                          <div className="lg:hidden relative aspect-video w-full rounded-lg overflow-hidden shadow-lg border border-outline-variant/20">
                            <Image
                              src={item.image || "/cocktail-2.png"}
                              alt={item.name}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-background/60 to-transparent" />
                          </div>

                          <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-baseline gap-4">
                              <div className="flex items-baseline gap-4">
                                <span className="text-primary font-sans text-sm font-medium opacity-50 group-hover:opacity-100 transition-opacity">
                                  {displayIndex}
                                </span>
                                <h3 className="font-serif text-3xl text-on-surface group-hover:text-primary transition-colors duration-300">
                                  {item.name}
                                </h3>
                              </div>
                              <div className="flex-1 border-b border-dotted border-outline-variant/50 h-px mb-1.5" />
                              <span className="font-sans text-xl text-on-surface group-hover:text-primary transition-colors duration-300">
                                {item.price}
                              </span>
                            </div>
                            <p className="text-body-md text-on-surface-variant font-light leading-relaxed max-w-2xl italic mb-1">
                              {item.description}
                            </p>
                            <p className="text-[12px] font-sans text-on-surface-variant/60 uppercase tracking-widest leading-relaxed">
                              {item.ingredients}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing Note */}
        <section className="mt-32 border-t border-outline-variant/20 pt-24">
          <div className="max-w-2xl mx-auto px-6 text-center italic text-on-surface-variant font-light">
            <p className="text-body-md mb-8">
              L&apos;alcool ne soigne rien, mais il aide à oublier les questions restées sans réponse.&quot;
            </p>
            <p className="text-label-caps text-primary text-[10px] tracking-[0.2em] not-italic">
              L&apos;abus d&apos;alcool est dangereux pour la santé, à consommer avec modération.
            </p>
          </div>
        </section>
      </main>

    </div>
  );
}
