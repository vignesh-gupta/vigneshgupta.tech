import { MetadataRoute } from "next";

const host = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vigneshgupta.tech";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: host,
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 1,
    },
    {
      url: `${host}/about`,
      lastModified: new Date(),
      changeFrequency: "always",
    },
    {
      url: `${host}/projects`,
      lastModified: new Date(),
      changeFrequency: "always",
    },
    {
      url: `${host}/contact`,
      lastModified: new Date(),
      changeFrequency: "always",
    },
  ];
}
