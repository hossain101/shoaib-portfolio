"use client";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
  children,
  className,
}: {
  className?: string;
  children?: React.ReactNode[];
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2  py-10 ", className)}>
      {children!.map((item, idx) => (
        <div
          key={idx}
          className="relative group p-2 h-full  "
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.div
                className="absolute inset-0 bg-neutral-400 dark:bg-gradient-to-r from-red-500 via-orange-400 to-red-500 rounded-3xl hover-overlay"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.15 },
                }}
              />
            )}
          </AnimatePresence>
          {item}
        </div>
      ))}
    </div>
  );
};
