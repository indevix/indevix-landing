import { MetadataRoute } from "next";

const BASE_URL = "https://indevix.com";
const locales = ["en", "ru", "tr", "ky"];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  routes.push({
    url: BASE_URL,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 1,
  });

  locales.forEach((locale) => {
    routes.push({
      url: `${BASE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    });
  });

  locales.forEach((locale) => {
    routes.push({
      url: `${BASE_URL}/${locale}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    });
  });
  return routes;
}
