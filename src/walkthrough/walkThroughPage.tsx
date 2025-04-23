import React from "react";
import { Helmet } from "react-helmet-async";
import MediaText from "../components/walkThrough/mediaText.tsx";
import MinitoolsSection from "../components/walkThrough/miniToolsSection.tsx";
import ExtrasSection from "../components/walkThrough/extrasSection.tsx";
import { walkthrough } from "../constants/data.ts";

const Walkthrough: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "MeMeY Walkthrough",
    description:
      "Discover how MeMeY simplifies data analysis for students with our step-by-step walkthrough and tutorial.",
    url: "https://memey2-o99r.vercel.app/walkthrough",
    publisher: {
      "@type": "Organization",
      name: "MeMeY",
      logo: {
        "@type": "ImageObject",
        url: "https://memey2-o99r.vercel.app/mmy-logo.webp",
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>MeMeY Walkthrough | Data Analysis Tutorial</title>
        <meta
          name="description"
          content="Learn how MeMeY simplifies data analysis with our step-by-step walkthrough. Perfect for students and researchers."
        />
        <meta
          name="keywords"
          content="MeMeY walkthrough, data analysis tutorial, student data analysis, menu measurement guide"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="MeMeY Team" />
        <meta property="og:title" content="MeMeY Walkthrough" />
        <meta
          property="og:description"
          content="Explore MeMeY’s step-by-step walkthrough to master data analysis for students."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://memey2-o99r.vercel.app/walkthrough" />
        <meta
          property="og:image"
          content="https://memey2-o99r.vercel.app/mmy-logo.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MeMeY Walkthrough" />
        <meta
          name="twitter:description"
          content="Explore MeMeY’s step-by-step walkthrough to master data analysis."
        />
        <meta
          name="twitter:image"
          content="https://memey2-o99r.vercel.app/mmy-logo.webp"
        />
        <link rel="canonical" href="https://memey2-o99r.vercel.app/walkthrough" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <main className="relative bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="text-center animate-fade-in mb-20">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-black to-blue-600 bg-clip-text text-transparent mb-6 sm:mb-8">
              MeMeY Walkthrough
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how MeMeY simplifies data analysis with these key
              features and tools.{" "}
              <a href="/contact" className="text-blue-600 hover:underline">
                Contact us
              </a>{" "}
              for personalized support.
            </p>
          </div>
          <div className="space-y-12 md:space-y-16">
            {walkthrough.map((fact, index) => (
              <MediaText
                key={index}
                factNumber={fact.factNumber}
                description={fact.description}
                imageSrc={fact.imageSrc}
                imageAlt={fact.imageAlt}
                imageCaption={fact.imageCaption}
                imageSrcSet={fact.imageSrcSet}
                imageSizes={fact.imageSizes}
                imageOnRight={fact.imageOnRight}
              />
            ))}
          </div>
          <MinitoolsSection />
          <ExtrasSection />
        </div>
      </main>
    </>
  );
};

export default Walkthrough;
