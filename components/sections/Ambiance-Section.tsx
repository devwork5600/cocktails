"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AmbianceSection = () => {
  const images = [
    {
      src: "/hero-bg.png",
      alt: "Bar atmosphere",
      className: "md:col-span-2 md:row-span-2 h-[400px] md:h-full",
    },
    {
      src: "/cocktail-1.png",
      alt: "Exquisite details",
      className: "md:col-span-1 md:row-span-2 h-[400px] md:h-full",
    },
    {
      src: "/cocktail-3.png",
      alt: "Cozy corner",
      className: "md:col-span-1 md:row-span-1 h-[250px] md:h-full",
    },
    {
      src: "/cocktail-6.png",
      alt: "Night life",
      className: "md:col-span-1 md:row-span-1 h-[250px] md:h-full",
    },

  ];

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col gap-4 mb-16">
          <span className="text-label-caps text-primary tracking-[0.3em]">
            L&apos;Atmosphère
          </span>
          <h2 className="text-display-lg text-on-surface">
            Un écrin <br />
            <span className="italic text-primary">de sophistication</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[300px]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className={`relative overflow-hidden rounded-xl group ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-t from-black/60 to-transparent">
                <span className="text-white text-label-caps text-xs">
                  {image.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmbianceSection;
