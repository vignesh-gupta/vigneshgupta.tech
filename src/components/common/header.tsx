"use client"

import Link from "next/link";
import { motion } from "framer-motion";

import { navLinks, socials } from "@/lib/constants";
import Logo from "./logo";
import MobileNav from "./mobile-nav";

const Header = () => {
  return (
    <>
      <motion.header
        initial={{ translateY: -100 }}
        animate={{ translateY: 0 }}
        transition={{ duration: 0.2 }}
        className="relative z-[999] pt-10 hidden px-4 md:block"
      >
        <div className="container mx-auto flex h-16 w-full max-w-[1024px] items-center justify-between rounded-full border-[1px] border-white/25 bg-white/25 px-8 backdrop-blur-md dark:border-[#5E5E5E]/20 dark:bg-[#18181D]/30">
          <div className="flex items-center gap-10">
            <Link aria-label="Vignesh Gupta Logo" href="/">
              <Logo width={50} height={50} />
            </Link>
            <nav
              aria-label="Main"
              data-orientation="horizontal"
              dir="ltr"
              className="relative flex justify-center"
            >
              <div className="relative">
                <ul className="m-0 flex list-none items-center gap-10 rounded-[6px] p-1">
                  {navLinks.map((link) => (
                    <li key={`nav-link-${link.name}`}>
                      <Link
                        className="block py-2 text-onyx/70 transition-colors hover:text-onyx dark:text-muted-foreground dark:hover:text-white"
                        href={link.href}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-6 text-onyx/70 dark:text-white/70">
              {socials.map((social) => (
                <Link
                  key={`header-social-${social.name}`}
                  className="group transition hover:text-onyx dark:hover:text-white"
                  target="_blank"
                  aria-label={social.name}
                  href={social.href}
                >
                  <social.icon className="size-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.header>
      <Link
        href="/"
        aria-label="Vignesh Gupta Logo"
        className="relative top-5 left-0 right-0"
      >
        <Logo
          width={50}
          height={50}
          className="block mx-auto md:hidden opacity-60"
        />
      </Link>
      <MobileNav />
    </>
  );
};

export default Header;
