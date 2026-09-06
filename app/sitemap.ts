import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { blogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/banking-partners",
    "/faq",
    "/contact",
    "/blog",
    "/privacy-policy",
    "/terms-and-conditions",
    "/disclaimer",
  ].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${site.url}/services/${s.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
