"use client";

import HeaderGradient from "@/components/common/header-gradient";
import { ThemeProvider } from "@/components/theme/theme-provider";
import clsx from "clsx";
import Link from "next/link";

export default function Page404() {
  return (
    <body
      className={clsx(
        "flex min-h-screen w-full grow flex-col items-center justify-center gap-5  text-center text-foreground antialiased relative"
      )}
    >
      <HeaderGradient className="h-[500px]" />
      <ThemeProvider attribute="class" defaultTheme="dark">
        <h1 className="text-xl capitalize md:text-2xl">
          404 | Oops seems like a wrong page
        </h1>
        <Link href="/" className="rounded-lg primary-button px-5 py-3 text-white">
          Go home
        </Link>
      </ThemeProvider>
    </body>
  );
}
