import { BriefcaseBusiness, CircleUserRound, Mail, Pencil } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const socials = [
  { name: "Github", href: "https://github.com/vignesh-gupta/", icon: FaGithub },
  {
    name: "X (Twitter)",
    href: "https://x.com/vigneshfixes/",
    icon: FaXTwitter,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/vigneshgupta/",
    icon: FaLinkedin,
  },
];

export const navLinks = [
  { name: "About", href: "/about", Icon: CircleUserRound },
  { name: "Work", href: "/work", Icon: BriefcaseBusiness },
  { name: "Notebook", href: "/notebook", Icon: Pencil },
  { name: "Contact", href: "/contact", Icon: Mail },
];
