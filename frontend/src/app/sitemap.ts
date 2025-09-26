import { MetadataRoute } from "next";

const BASE_URL = "https://indevix.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
      alternates: {
        languages: {
          en: `${BASE_URL}/en`,
          ru: `${BASE_URL}/ru`,
          tr: `${BASE_URL}/tr`,
          ky: `${BASE_URL}/ky`,
          "x-default": `${BASE_URL}/en`,
        },
      },
    },
    {
      url: `${BASE_URL}/en/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: {
          en: `${BASE_URL}/en/projects`,
          ru: `${BASE_URL}/ru/projects`,
          tr: `${BASE_URL}/tr/projects`,
          ky: `${BASE_URL}/ky/projects`,
          "x-default": `${BASE_URL}/en/projects`,
        },
      },
    },
  ];

  return routes;
}
