"use client";

import { AnimatePresence, motion, Variants, MotionProps } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { ElementType } from "react";
import React from "react";

interface FlipTextProps extends MotionProps {
  duration?: number;
  delayMultiple?: number;
  className?: string;
  as?: ElementType;
  children: React.ReactNode;
  variants?: Variants;
}

const defaultVariants: Variants = {
  hidden: { rotateX: -90, opacity: 0 },
  visible: { rotateX: 0, opacity: 1 },
};

export function FlipText({
  children,
  duration = 0.5,
  delayMultiple = 0.08,
  className,
  as: Component = "span",
  variants,
  ...props
}: FlipTextProps) {
  const MotionComponent = motion.create(Component);
  const text = React.Children.toArray(children).join("");
  const characters = text.split("");

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className="flex justify-center flex-wrap gap-x-1 sm:gap-x-2 max-w-full"
    >
      <AnimatePresence mode="wait">
        {characters.map((char, i) => (
          <MotionComponent
            key={i}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            exit="hidden"
            variants={variants || defaultVariants}
            transition={{ duration, delay: i * delayMultiple }}
            className={cn("origin-center drop-shadow-sm inline-block", className)}
            {...props}
          >
            {char === " " ? "\u00A0" : char} {/* Preserve spaces */}
          </MotionComponent>
        ))}
      </AnimatePresence>
    </div>
  );
}