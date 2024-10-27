import { cn } from "@/lib/utils";
import Image from "next/image";

const HeroImage = ({ className }: { className?: string }) => {
  return (
    <>
      <Image
        className={cn("dark:hidden block", className)}
        src="/hero-light.svg"
        alt="hero"
        width={500}
        height={500}
      />
      <Image
        className={cn("hidden dark:block", className)}
        src="/hero.svg"
        alt="hero"
        width={500}
        height={500}
      />
    </>
  );
};

export default HeroImage;
