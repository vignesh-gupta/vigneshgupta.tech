import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative mt-16 min-h-[326px] pb-32 md:pb-12">
      <div className="h-[1px] w-full bg-black/10 dark:bg-white/10"></div>
      <div className="container mx-auto relative z-10 mt-20 flex w-full max-w-5xl flex-col items-start justify-between gap-12 md:h-[236px] md:flex-row">
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col ">
            <Image src="/logo.svg" width={150} height={150} alt="Logo" />
            <p className="mt-4 text-onyx/60 dark:text-white/40">
              Thanks for stopping by <span className="text-2xl">ッ</span>
            </p>
          </div>
          <p className="mt-10 text-sm text-onyx/60 dark:text-white/40 md:mt-0">
            &copy; {new Date().getFullYear()} Vignesh Gupta. All Rights
            Reserved.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 -order-1 md:order-2 md:grid-cols-2 md:gap-20">
          <div className="flex flex-col gap-8">
            <p className="font-bold text-onyx dark:text-white">Links</p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-2 group text-onyx/60 hover:text-onyx dark:text-muted dark:hover:text-white">
                <a className="transition-colors duration-150" href="/about">
                  About
                </a>
              </li>
              <li className="flex items-center gap-2 group text-onyx/60 hover:text-onyx dark:text-muted dark:hover:text-white">
                <a className="transition-colors duration-150" href="/work">
                  Work
                </a>
              </li>
              <li className="flex items-center gap-2 group text-onyx/60 hover:text-onyx dark:text-muted dark:hover:text-white">
                <a className="transition-colors duration-150" href="/uses">
                  Tech Stack
                </a>
              </li>
              <li className="flex items-center gap-2 group text-onyx/60 hover:text-onyx dark:text-muted dark:hover:text-white">
                <a className="transition-colors duration-150" href="/bookshelf">
                  Bookshelf
                </a>
              </li>
              <li className="flex items-center gap-2 group text-onyx/60 hover:text-onyx dark:text-muted dark:hover:text-white">
                <a className="transition-colors duration-150" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <p className="font-bold text-onyx dark:text-white">Elsewhere</p>
            <ul className="flex flex-col gap-4 text-muted">
              <li className="flex items-center gap-2 group text-onyx/60 hover:text-onyx dark:text-muted dark:hover:text-white">
                <a
                  className="transition-colors duration-150"
                  target="_blank"
                  href="https://www.linkedin.com/in/eihab-khan/"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-2 group text-onyx/60 hover:text-onyx dark:text-muted dark:hover:text-white">
                <a
                  className="transition-colors duration-150"
                  target="_blank"
                  href="https://github.com/eihabkhan"
                >
                  GitHub
                </a>
              </li>
              <li className="flex items-center gap-2 group text-onyx/60 hover:text-onyx dark:text-muted dark:hover:text-white">
                <a
                  className="transition-colors duration-150"
                  target="_blank"
                  href="https://x.com/itseihab"
                >
                  X (Twitter)
                </a>
              </li>
              <li className="flex items-center gap-2 group text-onyx/60 hover:text-onyx dark:text-muted dark:hover:text-white">
                <a
                  className="transition-colors duration-150"
                  target="_blank"
                  href="https://discord.com/users/itseihab"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
