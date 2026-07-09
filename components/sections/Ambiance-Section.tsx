"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const AmbianceSection = () => {
  const images = [
    { src: "/hero-bg.png", alt: "L'Atmosphère" },
    { src: "/cocktail-1.png", alt: "L'Artisanat" },
    { src: "/cocktail-2.png", alt: "La Signature" },
    { src: "/cocktail-3.png", alt: "Le Détail" },
    { src: "/cocktail-6.png", alt: "L'Émotion" },
    { src: "/branding-shot.png", alt: "L'Héritage" },
  ];

  const targetRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const calculateScroll = () => {
      if (contentRef.current && targetRef.current) {
        // Calculate the difference between total content width and the viewable window width
        const range = contentRef.current.scrollWidth - window.innerWidth;
        setScrollRange(range > 0 ? range : 0);
      }
    };

    calculateScroll();
    window.addEventListener("resize", calculateScroll);
    return () => window.removeEventListener("resize", calculateScroll);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Scroll from start (0) to the negative of the calculated scroll range
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-surface">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 mb-8 md:mb-12 w-full">
          <div className="flex flex-col gap-4">
            <span className="text-label-caps text-secondary tracking-[0.3em]">
              L&apos;Atmosphère
            </span>
            <h2 className="text-display-lg text-on-surface">
              Un voyage <br />
              <span className="italic text-secondary">en mouvement</span>
            </h2>
          </div>
        </div>

        <motion.div 
          ref={contentRef}
          style={{ x }} 
          className="flex gap-4 md:gap-8 px-6 md:px-20 w-max"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-87.5 w-70 md:h-112.5 md:w-125 shrink-0 overflow-hidden rounded-2xl group hairline shadow-2xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                <p className="text-label-caps text-white text-xs md:text-sm tracking-widest">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute bottom-10 left-6 md:bottom-20 md:left-20">
          <div className="flex items-center gap-4 text-on-surface-variant/40">
            <span className="text-[10px] uppercase tracking-[0.5em]">Scroll to explore</span>
            <div className="w-12 md:w-24 h-px bg-on-surface-variant/20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmbianceSection;
