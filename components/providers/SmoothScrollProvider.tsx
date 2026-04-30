"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, ReactNode } from "react";

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    lenis.start(); // Enable scroll
  }, [lenis]);

  return (
    <ReactLenis root options={{ lerp: 0.2, duration: 0.9 }}>
      {children}
    </ReactLenis>
  );
}
