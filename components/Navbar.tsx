"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "L'Univers", href: "/#universe" },
  { name: "La Carte", href: "/la-carte" },
  { name: "Privatisation", href: "/#privatization" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={cn(
          "border-b border-transparent transition-all duration-500 px-6 sm:px-10 py-6",
          isScrolled || isMenuOpen ? "backdrop-blur-lg border-amber-300" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex flex-col items-start gap-0">
            <span className="font-serif text-2xl tracking-tight text-primary">
              L&apos;Élixir Doré
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
            <button className="gold-gradient text-on-primary font-sans text-xs font-bold uppercase tracking-widest px-8 py-3 rounded-md hover:brightness-110 transition-all shadow-lg">
              Réserver
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-primary p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="backdrop-blur-lg border-b border-amber-300/20 p-8 lg:hidden flex flex-col gap-8 shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-headline-md text-on-surface hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button className="gold-gradient text-on-primary font-sans text-sm font-bold uppercase tracking-widest px-8 py-4 rounded-md shadow-lg w-full">
              Réserver une table
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
