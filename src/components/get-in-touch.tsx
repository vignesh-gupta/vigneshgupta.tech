import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { SendHorizontalIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const GetInTouch = ({ className }: { className?: string }) => {
  return (
    <Button
      className={cn(
        "py-6 bg-gradient hover:bg-gradient primary-button dark:text-muted text-white dark:hover:text-white hover:translate-y-[-1px] active:translate-y-[1px] font-medium transition duration-300",
        className
      )}
      size="lg"
      asChild
    >
      <Link href={"/contact"}>
        <SendHorizontalIcon className="mr-1 size-6" />
        Get in touch
      </Link>
    </Button>
  );
};

export default GetInTouch;
