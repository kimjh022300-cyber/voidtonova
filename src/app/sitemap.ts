import type { MetadataRoute } from "next";
import { productsWithDetails } from "@/data/products";
import { absoluteUrl, PUBLIC_ROUTES } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...PUBLIC_ROUTES.map((route) => ({
      url: absoluteUrl(route.path),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...productsWithDetails.map((product) => ({
      url: absoluteUrl(product.detailPath),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
