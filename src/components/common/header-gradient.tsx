import { cn } from "@/lib/utils";
import Image from "next/image";

const HeaderGradient = ({ className }: { className?: string }) => {
  return (
    <div
      draggable={false}
      className="absolute inset-x-0 top-0 select-none -z-40"
    >
      <div className={"relative h-[550px] w-full overflow-x-hidden"}>
        <picture
          className={cn(
            "absolute left-1/2 top-0 z-[2] block h-[550px] w-[1440px] -translate-x-1/2 select-none blur-sm",
            className
          )}
        >
          <Image src="/header-gradient.svg" alt="hero gradient" fill />
        </picture>
      </div>
    </div>
  );
};

export default HeaderGradient;
