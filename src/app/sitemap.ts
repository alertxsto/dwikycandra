import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://dwikycandra.vercel.app",
      lastModified: "2026-09-02",
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
