import React from "react";
import { Helmet } from "react-helmet-async";

const BluePillSection: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "MeMeY Blue Pill - Simple Data Analysis",
    description:
      "Discover MeMeY, a simple data analysis tool for students. Press one button to analyze data without complexity.",
    url: "https://memey2-o99r.vercel.app/blue-pill",
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
        <title>MeMeY Blue Pill - Simple Data Analysis for Students</title>
        <meta
          name="description"
          content="MeMeY simplifies data analysis for students with one-click functionality. Learn how our tool streamlines your workflow."
        />
        <meta
          name="keywords"
          content="MeMeY, simple data analysis, data analysis for students, menu measurement"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="MeMeY Team" />
        <meta
          property="og:title"
          content="MeMeY Blue Pill - Simple Data Analysis"
        />
        <meta
          property="og:description"
          content="MeMeY offers a one-click data analysis solution for students. Simplify your workflow today."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://memey2-o99r.vercel.app/blue-pill"
        />
        <meta
          property="og:image"
          content="https://memey2-o99r.vercel.app/blue-pill.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="MeMeY Blue Pill - Simple Data Analysis"
        />
        <meta
          name="twitter:description"
          content="MeMeY offers a one-click data analysis solution for students. Simplify your workflow today."
        />
        <meta
          name="twitter:image"
          content="https://memey2-o99r.vercel.app/blue-pill.png"
        />
        <link rel="canonical" href="https://memey2-o99r.vercel.app/blue-pill" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <main className="relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="relative rounded-xl overflow-hidden mx-auto">
            <div className="relative">
              <img
                loading="lazy"
                width={1024}
                height={768}
                className="w-full h-48 md:h-64 lg:h-[500px] object-cover"
                alt="MeMeY Simple Data Analysis Illustration"
                src="/blue-pill.png"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
              <div className="absolute inset-0 bg-[#b3c3dc]/40" />
              <p className="absolute inset-0 flex items-center justify-center text-center text-xl md:text-2xl xl:text-[40px] font-bold text-[#17191b] px-4">
                A softer approach…
              </p>
            </div>
          </div>
          <div className="mt-8 sm:mt-12 lg:mt-16 space-y-4 sm:space-y-6 text-gray-700 font-medium text-base">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Simplify Data Analysis with MeMeY
            </h1>
            <p>What’s the simplest tool you’ve ever learned how to use?</p>
            <p>Perhaps a fork? A whistle? Glasses?</p>
            <p>
              Probably something that has one purpose, and once you’ve been
              taught what it is, there’s no way to mess it up.
            </p>
            <p>
              You probably wouldn’t say the simplest tool you’ve learned how to
              use is a swiss army knife or a fountain pen. You certainly
              wouldn’t say something like “AI agents”, “statistical computing
              software”, or “Excel”.
            </p>
            <p>
              Those tools have many little features, and there are lots of ways
              to mess it up.
            </p>
            <p>That’s one reason we made MeMeY (Measure Menu Y).</p>
            <p>
              It simplifies your entire data analysis process to just pressing
              the analyze button.
            </p>
            <p>
              It’s simpler because it was made to do the whole thing at once, in
              an effective, pre-packaged way. It doesn’t have all the
              customization options that other tools have, which is why it’s
              able to just go.
            </p>
            <p>
              Sounds good?{" "}
              <a href="/contact-us" className="text-blue-600 hover:underline">
                Contact us
              </a>{" "}
              to learn more!
            </p>
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

export default BluePillSection;
