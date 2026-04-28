import { MetadataRoute } from "next";

const BASE_URL = "https://nfs-website-nine.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["pt", "en"];
  const carSlugs = ["fsnovaev01", "fsfenixevo", "fsfenix", "fsdragon"];

  // Static pages
  const staticPages = locales.flatMap((locale) => [
    {
      url: `${BASE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${BASE_URL}/${locale}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/${locale}/garage`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/${locale}/partners`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/${locale}/contacts`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ]);

  // Dynamic car pages
  const carPages = locales.flatMap((locale) =>
    carSlugs.map((slug) => ({
      url: `${BASE_URL}/${locale}/garage/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    }))
  );

  return [...staticPages, ...carPages];
}
