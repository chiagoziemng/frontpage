import { FlipText } from "@/components/magicui/flip-text";

export function FlipTextDemo() {
  return (
    <div className="flex justify-center">
    <FlipText
        className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold md:font-medium text-center whitespace-nowrap overflow-hidden"
      >
        Built from the ground up
      </FlipText>
  </div>
  );
}
