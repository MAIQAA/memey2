const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

const hostname = "https://memey2-o99r.vercel.app";
const urls = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/blue-pill", changefreq: "weekly", priority: 0.8 },
  { url: "/contact-us", changefreq: "monthly", priority: 0.7 },
  { url: "/faq", changefreq: "monthly", priority: 0.7 },
  { url: "/features", changefreq: "weekly", priority: 0.8 },
  { url: "/help", changefreq: "monthly", priority: 0.7 },
  { url: "/privacy-policy", changefreq: "yearly", priority: 0.5 },
  { url: "/red-pill", changefreq: "weekly", priority: 0.8 },
  { url: "/walkthrough", changefreq: "monthly", priority: 0.7 },
];

const sitemap = new SitemapStream({ hostname });
urls.forEach((url) => sitemap.write(url));
sitemap.end();

streamToPromise(sitemap)
  .then((data) =>
    createWriteStream("public/sitemap.xml").write(data.toString())
  )
  .catch(console.error);
