import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export function ScrollBasedVelocityDemo() {
  return (
    <div className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-blue-400 drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]">
      <VelocityScroll>Smart Tech. Stunning Design. Unstoppable Growth. From Vision to Victory—We Build Digital Powerhouses.</VelocityScroll>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
