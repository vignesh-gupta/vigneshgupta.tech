import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";

const PageContainer = ({
  children,
className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <main className={cn("container max-w-screen-lg px-8 pt-16 mx-auto space-y-20 animate-fade-in", className)}>
      {children}
    </main>
  );
};

export default PageContainer;
