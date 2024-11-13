"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import HeaderGradient from "@/components/common/header-gradient";
import { ThemeProvider } from "@/components/theme/theme-provider";

const pageData = [
  {
    title: "Oops! Looks like this page is on a coffee break.",
    describe: "Don't worry, even the best developers get lost sometimes.",
    footer:
      "Error: 404 | Page Not Found | Stack Trace: Just kidding, we don't do that here.",
  },
  {
    title: "Oops! This page seems to have a bug :(",
    describe:
      "Don't worry, even the best developers encounter unexpected errors.",
    footer: "Error: 404 | Page Not Found | Git blame: Probably the intern",
  },
];

export default function Page404() {
  const randomData = pageData[Math.floor(Math.random() * pageData.length)];

  return (
    <body
      className={clsx(
        "flex min-h-screen w-full grow flex-col items-center justify-center gap-5  text-center text-foreground antialiased relative"
      )}
    >
      <HeaderGradient className="h-[500px]" />
      <ThemeProvider attribute="class" defaultTheme="dark">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-9xl font-bold mb-4">404</h1>
          <p className="text-2xl mb-8">{randomData.title}</p>
          <p className="text-lg mb-8">{randomData.describe}</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/"
              className="rounded-lg primary-button px-5 py-3 inline-flex items-center  text-lg font-medium text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Home
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 text-sm text-gray-500 dark:text-gray-400"
        >
          <p>{randomData.footer}</p>
        </motion.div>
      </ThemeProvider>
    </body>
  );
}
