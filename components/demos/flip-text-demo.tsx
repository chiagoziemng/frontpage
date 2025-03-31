import { FlipText } from "@/components/magicui/flip-text";

export function FlipTextDemo() {
  return (
    <div className="flex justify-center w-full px-2 sm:px-4">
      <FlipText
        className="text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold md:font-medium text-center max-w-full"
      >
        Built from the ground up
      </FlipText>
    </div>
  
  );
}
