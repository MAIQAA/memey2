import React from "react";
import { Helmet } from "react-helmet-async";

const RedPillSection: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "MeMeY Red Pill - Data Analysis for Research",
    description:
      "MeMeY revolutionizes data analysis for researchers by scanning entire datasets for significant relationships, reducing fraud and enhancing discovery.",
    url: "https://memey2-o99r.vercel.app/red-pill",
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
        "MeMeY is a data analysis tool that scans datasets for significant relationships, aiding scientific research.",
    },
  };

  return (
    <>
      <Helmet>
        <title>MeMeY Red Pill | Data Analysis for Research</title>
        <meta
          name="description"
          content="MeMeY helps researchers analyze data by scanning entire datasets, reducing fraud and enhancing scientific discovery."
        />
        <meta
          name="keywords"
          content="MeMeY data analysis, scientific research tool, data scanning software, menu measurement"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="MeMeY Team" />
        <meta
          property="og:title"
          content="MeMeY Red Pill - Data Analysis for Research"
        />
        <meta
          property="og:description"
          content="MeMeY revolutionizes data analysis for researchers with dataset scanning to reduce fraud and enhance discovery."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://memey2-o99r.vercel.app/red-pill" />
        <meta
          property="og:image"
          content="https://memey.cloud/wp-content/uploads/2024/08/red-pill.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="MeMeY Red Pill - Data Analysis for Research"
        />
        <meta
          name="twitter:description"
          content="MeMeY revolutionizes data analysis for researchers with dataset scanning."
        />
        <meta
          name="twitter:image"
          content="https://memey.cloud/wp-content/uploads/2024/08/red-pill.png"
        />
        <link rel="canonical" href="https://memey2-o99r.vercel.app/red-pill" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <main className="relative" id="wp--skip-link--target">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="relative rounded-xl overflow-hidden mx-auto">
            <div className="relative">
              <img
                loading="lazy"
                width={1024}
                height={768}
                className="w-full h-48 md:h-64 lg:h-[500px] object-cover"
                alt="MeMeY Data Analysis for Research Illustration"
                src="https://memey.cloud/wp-content/uploads/2024/08/red-pill.png"
                srcSet="https://memey.cloud/wp-content/uploads/2024/08/red-pill.png 1024w, https://memey.cloud/wp-content/uploads/2024/08/red-pill.png?w=150&h=113 150w, https://memey.cloud/wp-content/uploads/2024/08/red-pill.png?w=300&h=225 300w, https://memey.cloud/wp-content/uploads/2024/08/red-pill.png?w=768&h=576 768w"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
              <div className="absolute inset-0 bg-[#f3e0e6]/40" />
              <p className="absolute inset-0 flex items-center justify-center text-center text-xl md:text-2xl xl:text-[40px] font-bold text-[#17191b] px-4">
                So you’ve chosen to hear some unpleasant truths…
              </p>
            </div>
          </div>
          <div className="mt-8 sm:mt-12 lg:mt-16 space-y-4 sm:space-y-6 text-gray-700 font-medium text-base">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              MeMeY: Revolutionizing Research Data Analysis
            </h1>
            <p>
              We’re losing. Fraud detectives, peer review, and image analyzers
              are not enough to stop the tide of false research that is making
              its way into all fields. Falsification, fabrication, data cooking,
              plagiarism, and now AI “paper mills” are taking a tremendous toll
              on the advancement of science and knowledge. This unsolved problem
              has been silently poisoning research for years.
            </p>
            {/* ... (rest of the content remains unchanged) ... */}
            <p>
              Crucially, I must also mention that Measure Menu Y is not an AI.
              Why not? Because commercial AI technology has three flaws which
              make it unsuitable for scanning.{" "}
              <a href="/contact" className="text-blue-600 hover:underline">
                Contact us
              </a>{" "}
              to learn more about how MeMeY differs.
            </p>
            {/* ... (remaining content unchanged) ... */}
          </div>
          <div className="mt-8 sm:mt-12 flex justify-center">
            <a
              href="https://www.dropbox.com/scl/fo/vs0kd7ouak67dj3dtihhq/APcMhaGyeXZ6To5ge-T3mTU?rlkey=31b82d5dypdj74g7dcahiacwe&st=lo13dbcn&dl=0"
              className="inline-block rounded-lg bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium hover:bg-blue-700 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get MeMeY Now
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default RedPillSection;
