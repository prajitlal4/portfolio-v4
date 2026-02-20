'use client';

import { ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Lenis intercepts native scroll with a JS RAF loop.
    // On mobile, native scroll is hardware-accelerated — Lenis fights it and
    // causes visible jank. Only enable on desktop (pointer: fine = mouse).
    const isDesktop = window.matchMedia('(pointer: fine)').matches;
    if (!isDesktop) return;

    const lenis = new Lenis({
      duration: 0.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.2,
    });

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Scroll to top when pathname changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return <>{children}</>;
}
