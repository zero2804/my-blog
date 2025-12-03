import { posts } from "../../../data/posts";
import type { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://yourdomain.com";
  const urls = [
    `${baseUrl}/`,
    `${baseUrl}/posts`,
    ...posts.map(p => `${baseUrl}/posts/${p.slug}`)
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map(u => `<url><loc>${u}</loc></url>`).join("")}
  </urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" }
  });
}
