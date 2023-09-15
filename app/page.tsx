"use client";

import Preloader from "@/components/preloader";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Hero from "@/components/hero-banner";
import About from "@/components/about";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <main className="flex flex-col">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <section className="container">
        <Hero />
      </section>
      <section className="">
        <About />
      </section>
    </main>
  );
}
