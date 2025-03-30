"use client";

import { AnimatePresence, motion, Variants, MotionProps } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { ElementType } from "react";
import React from "react";

interface FlipTextProps extends MotionProps {
  /** The duration of the animation */
  duration?: number;
  /** The delay between each character */
  delayMultiple?: number;
  /** The class name of the component */
  className?: string;
  /** The element type of the component */
  as?: ElementType;
  /** The children of the component */
  children: React.ReactNode;
  /** The variants of the animation */
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
  const characters = React.Children.toArray(children).join("").split("");

  // Use the useInView hook to detect when the component is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.1,    // Trigger when 10% of the component is visible
  });

  return (
    <div ref={ref} className="flex justify-center space-x-2">
      <AnimatePresence mode="wait">
        {characters.map((char, i) => (
          <MotionComponent
            key={i}
            initial="hidden"
            animate={inView ? "visible" : "hidden"} // Only animate to "visible" when in view
            exit="hidden"
            variants={variants || defaultVariants}
            transition={{ duration, delay: i * delayMultiple }}
            className={cn("origin-center drop-shadow-sm", className)}
            {...props}
          >
            {char}
          </MotionComponent>
        ))}
      </AnimatePresence>
    </div>
  );
}