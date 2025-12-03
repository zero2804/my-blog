// components/SEO.tsx
import type { Metadata } from "next";

export function createMetadata({ title, description, url, image }: { title: string; description: string; url?: string; image?: string; }): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}
