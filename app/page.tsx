"use client";

import Preloader from "@/components/preloader";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Hero from "@/components/hero-banner";
import About from "@/components/about";
import Project from "@/components/project";
import ContactUs from "@/components/contact-us";
import SlidingImages from "@/components/sliding-Images";

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
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        id="about"
      >
        <About />
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        id="work"
      >
        <Project />
      </motion.section>
      <SlidingImages />
      <ContactUs />
    </main>
  );
}
