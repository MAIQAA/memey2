import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../components/home/Hero.tsx";
import Features from "../components/home/Features.tsx";
import Comparison from "../components/home/ComparisonSection.tsx";
import ChoosePath from "../components/home/ChoosePath.tsx";
import Testimonials from "../components/home/Testimonials.tsx";
import PricingSection from "../components/home/PricingPlan.tsx";

const Home: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "MeMeY - Data Analysis for Students",
    description:
      "MeMeY is a simple data analysis tool for students, offering one-click insights and offline functionality. Start analyzing data today.",
    url: "https://memey2-o99r.vercel.app/",
    publisher: {
      "@type": "Organization",
      name: "MeMeY",
      logo: {
        "@type": "ImageObject",
        url: "https://memey2-o99r.vercel.app/mmy-logo.webp",
      },
    },
    mainEntity: {
      "@type": "Product",
      name: "MeMeY Platform",
      description:
        "MeMeY simplifies data analysis for students with one-click functionality, offline capabilities, and clear insights.",
      brand: {
        "@type": "Brand",
        name: "MeMeY",
      },
      offers: {
        "@type": "Offer",
        url: "https://memey2-o99r.vercel.app/pricing",
        availability: "https://schema.org/InStock",
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>MeMeY | Simple Data Analysis for Students</title>
        <meta
          name="description"
          content="MeMeY offers one-click data analysis for students. Simplify your workflow with our offline, user-friendly platform."
        />
        <meta
          name="keywords"
          content="MeMeY, data analysis for students, simple data analysis, menu measurement tool, offline data analysis"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="MeMeY Team" />
        <meta
          property="og:title"
          content="MeMeY - Data Analysis for Students"
        />
        <meta
          property="og:description"
          content="Discover MeMeY, the simplest data analysis tool for students. Analyze data with one click and work offline."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://memey2-o99r.vercel.app/" />
        <meta
          property="og:image"
          content="https://memey2-o99r.vercel.app/mmy-logo.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="MeMeY - Data Analysis for Students"
        />
        <meta
          name="twitter:description"
          content="Discover MeMeY, the simplest data analysis tool for students."
        />
        <meta
          name="twitter:image"
          content="https://memey2-o99r.vercel.app/mmy-logo.webp"
        />
        <link rel="canonical" href="https://memey2-o99r.vercel.app/" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <main className="relative bg-gradient-to-b from-gray-50 to-white">
        <h1 className="sr-only">MeMeY - Simple Data Analysis for Students</h1>
        <Hero />
        <Features />
        <Comparison />
        <PricingSection />
        <ChoosePath />
        <Testimonials />
      </main>
    </>
  );
};

export default Home;
