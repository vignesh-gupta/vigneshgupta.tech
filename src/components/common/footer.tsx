import { navLinks, socials } from "@/lib/constants";
import Logo from "./logo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" container mx-auto px-5 relative mt-16 min-h-[326px] pb-32 md:pb-12 z-0">
      <div className="h-[1px] w-full bg-black/10 dark:bg-white/10"></div>
      <div className="container mx-auto relative z-10 mt-20 flex w-full max-w-5xl flex-col items-start justify-between gap-12 md:h-[236px] md:flex-row">
        <div className="flex flex-col justify-between h-full w-full">
          <div className="flex flex-col ">
            <Logo width={150} height={150} />
            <p className="mt-4 text-onyx/60 dark:text-white/40">
              Thanks for stopping by <span className="text-2xl">ッ</span>
            </p>
          </div>
          <p className="mt-10 text-sm text-onyx/60 dark:text-white/40 md:mt-0">
            Developed by Vignesh Gupta with this{" "}
            <Link
              href="https://www.figma.com/community/file/1266863403759514317"
              prefetch={false}
              className="underline underline-offset-2"
            >
              UI kit
            </Link>
          </p>
        </div>
        <div className="grid  gap-16 -order-1 md:order-2 grid-cols-2 md:gap-20">
          <div className="flex flex-col gap-8">
            <p className="font-bold text-onyx dark:text-white">Links</p>
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={`footer-link-${link.name}`}
                  className="flex items-center gap-2 group text-onyx/60 hover:text-onyx dark:text-muted dark:hover:text-white"
                >
                  <Link
                    prefetch={false}
                    className="transition-colors duration-150"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <p className="font-bold text-onyx dark:text-white">Elsewhere</p>
            <ul className="flex flex-col gap-4 text-muted">
              {socials.map((social) => (
                <li
                  key={`footer-socials-${social.name}`}
                  className="flex items-center gap-2 group text-onyx/60 hover:text-onyx dark:text-muted dark:hover:text-white"
                >
                  <Link
                    className="transition-colors duration-150"
                    target="_blank"
                    href={social.href}
                  >
                    {social.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
