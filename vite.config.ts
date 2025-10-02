import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import dayjs from "dayjs";

const allPages = [
  { path: "/", priority: "1.0" },
  { path: "/testimonials", priority: "0.9" },
  { path: "/news", priority: "0.9" },
  { path: "/get-in-touch", priority: "0.9" },
  { path: "/blog", priority: "0.9" },
  { path: "/projects", priority: "0.9" },
  { path: "/football-turf", priority: "0.9" },
  { path: "/pickleball-court", priority: "0.9" },
  { path: "/cricket-turf", priority: "0.9" },
  { path: "/indoor-turf", priority: "0.9" },
  { path: "/360-circle-turf", priority: "0.9" },
  { path: "/badminton-court", priority: "0.9" },
  { path: "/volleyball-turf", priority: "0.8" },
  { path: "/basket-ball", priority: "0.8" },
  { path: "/multi-sports-turf", priority: "0.9" },
  {
    path: "/aqua-eco-friendly-turf",
    priority: "1.0",
  },
  { path: "/turf-calculator", priority: "0.9" },

  // Important Producut Pages
  { path: "/products/eco-friendly", priority: "1.0" },
  { path: "/products/aqua-eco-friendly", priority: "1.0" },
  { path: "/products/360-turf", priority: "1.0" },
  { path: "/products/oval-turf", priority: "1.0" },
  { path: "/products/u-shape-turf", priority: "1.0" },
  { path: "/products/skating-rink", priority: "1.0" },
  { path: "/products/semi-circle-turf", priority: "1.0" },
  { path: "/products/diagonal-pitch", priority: "1.0" },
  { path: "/products", priority: "1.0" },

  // Important blog posts
  {
    path: "/blog/why-gameon-is-best-turf-construction-company",
    priority: "0.9",
  },
  {
    path: "/blog/bangalore-largest-multipurpose-turf-gameon-solution",
    priority: "0.9",
  },
  {
    path: "/blog/top-places-in-tamilnadu-to-start-a-turf-business",
    priority: "0.9",
  },
  { path: "/blog/turf-construction-cost-tamilnadu", priority: "0.9" },
  { path: "/blog/turf-construction-cost-kerala", priority: "0.9" },
  { path: "/blog/turf-construction-cost-ap-telangana", priority: "0.9" },
  { path: "/blog/turf-construction-cost-karnataka", priority: "0.9" },
  { path: "/blog/turf-calculator-online-estimate-tool", priority: "0.9" },
  { path: "/blog/best-turf-builder-bangalore-2025", priority: "0.9" },
  { path: "/blog/turf-construction-cost-chennai", priority: "0.9" },
  { path: "/blog/rubber-infilled-vs-eco-friendly-turf", priority: "0.9" },
  { path: "/blog/turf-maintenance-services-south-india", priority: "0.9" },

  {
    path: "/blog/turf-installation-kochi-cost-permits-locations",
    priority: "0.9",
  },

  // Other blogs (default 0.8)
  ...[
    "minimum-area-required-for-turf-installation",
    "turf-cricket-installation",
    "understanding-turf-and-artificial-grass",
    "india-pakistan-icc-matches-neutral-venues",
    "average-turf-size-guide",
    "minimum-square-feet-for-turf",
    "dhineshwaran-ms-how-he-built-his-legacy",
    "fifa-turf-vs-natural-grass",
    "rooftop-turf-ground-guide",
    "perfect-football-turf-construction-guide",
    "convert-empty-land-into-turf-business",
    "why-some-turfs-fail",
    "india-daily-turf-players",
    "why-turf-is-popular-now",
    "government-support-for-turfs",
    "turf-vs-real-estate-2025",
    "playgrounds-are-disappearing-turfs-are-rising",
    "turf-impact-local-sports",
    "attract-more-players-to-your-turf",
    "turf-vs-concrete-sports",
    "cost-of-football-and-cricket-turf-construction-india",
    "gen-alpha-aqua-eco-friendly-turf-rajapalayam",
    "sports-infrastructure-products-gameon-solution",
    "pickleball-court-construction-tamilnadu",
    "backyard-pickleball-court-construction-2025",
    "budget-pickleball-court-diy-guide-2025",
    "common-pickleball-court-building-mistakes-2025",
    "convert-tennis-court-to-pickleball-2025-guide",
    "pickleball-court-construction-mistakes-guide",
    "how-to-build-your-own-pickleball-court-step-by-step-guide",
    "rise-of-pickleball-in-tamil-nadu",
    "pickleball-court-dimensions-builder-guide",
    "pickleball-court-layout-elements",
    "pickleball-court-installation-cost",
    "pickleball-court-surface-options",
    "artificial-turf-installation-cost",
    "artificial-turf-infill-options",
    "best-artificial-turf-for-football",
    "football-field-turf-construction-mistakes",
    "benefits-of-artificial-turf-football-fields",
    "pickleball-court-dimensions-guide",
  ].map((slug) => ({
    path: `/blog/${slug}`,
    priority: "0.9",
  })),
];

// Sitemap generator plugin
function generateSitemap() {
  return {
    name: "vite-plugin-custom-sitemap",
    closeBundle: async () => {
      const hostname = "https://gameonsolution.in";
      const urls = allPages.map(
        ({ path, priority }) => `
  <url>
    <loc>${hostname}${path}</loc>
    <lastmod>${dayjs().format("YYYY-MM-DD")}</lastmod>
    <priority>${priority}</priority>
  </url>`
      );

      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.join("\n")}
</urlset>`;

      fs.writeFileSync("./dist/sitemap.xml", xml);
      console.log("✅ Sitemap generated at dist/sitemap.xml");
    },
  };
}

export default defineConfig({
  plugins: [react(), generateSitemap()],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      three: path.resolve("./node_modules/three"),
    },
  },
  optimizeDeps: {
    include: ["swiper"],
  },
});
