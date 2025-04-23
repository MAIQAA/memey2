import React from "react";
import { Helmet } from "react-helmet-async";
import { BiSupport } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HelpPage: React.FC = () => {
  const videos = [
    {
      title: "MeMeY Login Tutorial",
      src: "https://www.youtube.com/embed/XX-QzrtxOac?rel=0",
    },
    {
      title: "MeMeY Data Import Tutorial",
      src: "https://www.youtube.com/embed/m2j1lmkSA3Q?rel=0",
    },
    {
      title: "MeMeY THE Pro Tip",
      src: "https://www.youtube.com/embed/Ia97htsVDZg?rel=0",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "MeMeY Help & Tutorials",
    description:
      "Watch MeMeY tutorial videos to learn how to use our data analysis platform for students. Get help with login, data import, and more.",
    url: "https://memey2-o99r.vercel.app/help",
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
        <title>MeMeY Help | Data Analysis Tutorials</title>
        <meta
          name="description"
          content="Watch MeMeY tutorials to master our student-focused data analysis platform. Learn login, data import, and pro tips."
        />
        <meta
          name="keywords"
          content="MeMeY tutorials, data analysis help, student data analysis, menu measurement tutorials"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="MeMeY Team" />
        <meta property="og:title" content="MeMeY Help & Tutorials" />
        <meta
          property="og:description"
          content="Learn how to use MeMeY with our tutorial videos for students. Get started with data analysis today."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://memey2-o99r.vercel.app/help" />
        <meta
          property="og:image"
          content="https://memey2-o99r.vercel.app/mmy-logo.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MeMeY Help & Tutorials" />
        <meta
          name="twitter:description"
          content="Learn how to use MeMeY with our tutorial videos for students."
        />
        <meta
          name="twitter:image"
          content="https://memey2-o99r.vercel.app/mmy-logo.webp"
        />
        <link rel="canonical" href="https://memey2-o99r.vercel.app/help" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <main className="relative bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="text-center animate-fade-in">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-black to-blue-600 bg-clip-text text-transparent mb-6 sm:mb-8">
              Help & Support
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Watch our tutorial videos to get the most out of MeMeY or check
              our{" "}
              <a href="/faq" className="text-blue-600 hover:underline">
                FAQs
              </a>{" "}
              for common questions.
            </p>
          </div>
          <div className="mt-12 sm:mt-16 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 text-center mb-8 sm:mb-12">
              Tutorial Videos (Soundless)
            </h2>
            <Slider {...sliderSettings} className="mx-[-0.75rem]">
              {videos.map((video, index) => (
                <div key={index} className="px-3">
                  <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <iframe
                      title={video.title}
                      width="100%"
                      height="500"
                      src={video.src}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="w-full"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="mt-12 sm:mt-16 text-center animate-fade-in">
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
              Need more help? Check our FAQs or reach out to our support team!
            </p>
            <a
              href="/faq"
              className="inline-flex items-center justify-center text-blue-600 hover:text-blue-800 text-base sm:text-lg font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-4"
            >
              View FAQs
            </a>
            <a
              href="mailto:support@memey.cloud"
              className="inline-flex items-center justify-center text-blue-600 hover:text-blue-800 text-base sm:text-lg font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <BiSupport className="w-5 h-5 mr-2" />
              Contact Support
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default HelpPage;
