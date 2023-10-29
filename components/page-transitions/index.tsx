"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Index({ children }: { children: React.ReactNode }) {
  const router = usePathname();
  const isHomePage = router === "/";

  return (
    <>
      {isHomePage ? (
        children
      ) : (
        <AnimatePresence mode="wait">
          <motion.div key={router} className="">
            <motion.div
              className="absolute top-0 left-0 w-full h-screen bg-[#0f0f0f] origin-bottom"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 0 }}
              exit={{ scaleY: 1 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
            ></motion.div>
            <motion.div
              className="absolute top-0 left-0 w-full h-screen bg-[#0f0f0f] origin-top"
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              exit={{ scaleY: 0 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
            ></motion.div>
            {children}
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}
