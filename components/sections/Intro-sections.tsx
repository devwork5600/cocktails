"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const IntroSections = () => {
  return (
    <section
      id="universe"
      className="py-24 md:py-40 bg-surface-container-lowest"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 flex flex-col gap-8">
            <span className="text-label-caps text-primary tracking-[0.2em]">
              Notre Manifeste
            </span>
            <h2 className="text-display-lg text-on-surface">
              Une quête <br />
              <span className="italic">d&apos;équilibre & d&apos;audace</span>
            </h2>
            <p className="text-body-lg text-on-surface-variant font-light leading-relaxed">
              L&apos;Élixir Doré n&apos;est pas seulement un bar, c&apos;est un
              laboratoire d&apos;émotions. Nous croyons que chaque cocktail
              raconte une histoire, chaque ingrédient est une note, et chaque
              verre est une œuvre d&apos;art éphémère.
            </p>
            <div className="grid grid-cols-2 gap-10 mt-4">
              <div className="flex flex-col gap-2">
                <span className="text-primary font-serif text-4xl">120+</span>
                <span className="text-label-caps text-[10px] text-on-surface-variant">
                  Spiritueux Rares
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-primary font-serif text-4xl">15</span>
                <span className="text-label-caps text-[10px] text-on-surface-variant">
                  Signatures Uniques
                </span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative aspect-square w-full max-w-md lg:max-w-none">
            <div className="relative h-full w-full bg-surface-container-high rounded-md overflow-hidden gold-border">
              {/* We can add another image here if needed, or a moody texture */}
              <Image
                src="/cocktail-2.png"
                alt=""
                fill
             
                quality={100}
              />
              <motion.div
                initial={{ x: "0%" }}
                whileInView={{ x: "100%" }}
                viewport={{ once: true, amount: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="w-full h-full font-serif absolute top-0 left-0 bg-primary text-surface flex items-center justify-center text-4xl font-medium"
              >
                {" "}
                L&apos;Élixir Doré{" "}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSections;
