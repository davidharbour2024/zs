"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export function BuildProbe() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-reveal]", {
        y: 24,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="min-h-screen bg-[#f5f5f3] px-6 py-10 text-[#050505] md:px-10">
      <main className="mx-auto flex min-h-[80vh] max-w-6xl items-center">
        <section className="w-full rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm md:p-14">
          <div data-reveal className="mb-7 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#70747a]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#d61d25]" />
            Repository foundation ready
          </div>
          <h1 data-reveal className="max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.055em] md:text-8xl">
            Zahbro <span className="text-[#d61d25]">Sports</span>
          </h1>
          <p data-reveal className="mt-7 max-w-2xl text-base leading-7 text-[#70747a] md:text-lg">
            Clean restart for davidharbour2024/zs. Next.js, TypeScript, Tailwind and GSAP are wired for a phase-by-phase production build.
          </p>
          <div data-reveal className="mt-9 flex flex-wrap gap-3">
            {["Next.js 16 LTS", "Node 22", "TypeScript", "Tailwind 4", "GSAP"].map((item) => (
              <span key={item} className="zs-cut bg-[#111111] px-5 py-3 text-sm font-bold text-white">
                {item}
              </span>
            ))}
          </div>
          <div data-reveal className="mt-10 border-t border-black/10 pt-7 text-sm text-[#70747a]">
            Health check: <code className="rounded bg-black/5 px-2 py-1 text-[#050505]">/api/health</code>
          </div>
        </section>
      </main>
    </div>
  );
}
