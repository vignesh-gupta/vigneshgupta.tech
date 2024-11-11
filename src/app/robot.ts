import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/about", "/projects", "/contact"],
      disallow: "/editor/",
    },
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://vigneshgupta.tech"}/sitemap.xml`,
  };
}
