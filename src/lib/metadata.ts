import { Metadata } from "next";
import { CONTACT_EMAIL } from "./constants";

type MetadataProps = {
  preTitle?: string;
  title?: string;
  description?: string;
  url?: string;
  keywords?: string[];
  image?: string;
};

export const constructMetadata = ({
  preTitle = "",
  title = "Vignesh Gupta - A Fullstack Developer",
  description = "Experienced fullstack developer specializing in frontend technologies. Explore my portfolio for a showcase of projects and skills.",
  url = "https://vigneshgupta.tech",
  keywords = [],
  image = "/thumbnail.jpg",
}: MetadataProps): Metadata => ({
  title: preTitle + title,
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
  description: description,
  authors: {
    name: "Vignesh Gupta",
    url: url,
  },
  creator: "Vignesh Gupta",
  publisher: "Vignesh Gupta",
  keywords: [
    "vignesh",
    "gupta",
    "hcl",
    "front end developer",
    "react developer",
    "full stack",
    "product developer",
    "software project",
    "full stack developer",
    "developer",
    "software engineer",
    "software developer",
    "react create app",
    "web developer",
    "Fullstack Developer",
    "Frontend",
    "React JS",
    "Node JS",
    "Express JS",
    "Spring Boot",
    "PostgreSQL",
    "AWS",
    "Git",
    "MongoDB",
    "MySQL",
    ...keywords,
  ],
  openGraph: {
    type: "website",
    url: url,
    title: preTitle + title,
    description: description,
    siteName: preTitle + title,
    emails: [CONTACT_EMAIL],
    locale: "en_US",
    images: [
      {
        url: image,
        alt: preTitle + title,
      },
    ],
  },
  twitter: {
    creator: "@vigneshfixes",
    creatorId: "x.com/vigneshfixes",
    site: url,
    title: preTitle + title,
    images: [
      {
        url: image,
        alt: preTitle + title,
      },
    ],
  },
  metadataBase: new URL(url),
});
