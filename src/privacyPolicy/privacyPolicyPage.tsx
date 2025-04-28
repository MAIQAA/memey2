import React from "react";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "MeMeY Privacy Policy",
    description:
      "Learn how MeMeY protects your data. We don’t sell your information or record your data, ensuring privacy in offline data analysis.",
    url: "https://memey2-o99r.vercel.app/privacy-policy",
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
        <title>MeMeY Privacy Policy | Data Protection</title>
        <meta
          name="description"
          content="MeMeY’s privacy policy ensures your data is protected. We don’t sell your information or record your data."
        />
        <meta
          name="keywords"
          content="MeMeY privacy policy, data analysis privacy, student data protection, offline data analysis"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="MeMeY Team" />
        <meta property="og:title" content="MeMeY Privacy Policy" />
        <meta
          property="og:description"
          content="Learn how MeMeY protects your data with our straightforward privacy policy."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://memey2-o99r.vercel.app/privacy-policy"
        />
        <meta
          property="og:image"
          content="https://memey2-o99r.vercel.app/mmy-logo.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MeMeY Privacy Policy" />
        <meta
          name="twitter:description"
          content="Learn how MeMeY protects your data with our straightforward privacy policy."
        />
        <meta
          name="twitter:image"
          content="https://memey2-o99r.vercel.app/mmy-logo.webp"
        />
        <link rel="canonical" href="https://memey2-o99r.vercel.app/privacy-policy" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <main className="relative bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="text-center animate-fade-in">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-black to-blue-600 bg-clip-text text-transparent mb-6 sm:mb-8">
              Privacy Policy
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              In less than ten sentences, here’s how your data is protected with
              MeMeY.
            </p>
          </div>
          <div className="mt-8 sm:mt-12 space-y-4 sm:space-y-6 animate-slide-up">
            <p className="text-gray-700 text-base sm:text-lg">
              MeMeY sends a verification code to the email you provide, so of
              course it has to grab that email to do that, but{" "}
              <span className="font-bold text-blue-600">
                we don’t sell that
              </span>{" "}
              to any third party.
            </p>
            <p className="text-gray-700 text-base sm:text-lg">
              Likewise, the email you receive has your name in it, but{" "}
              <span className="font-bold text-blue-600">
                we don’t sell that
              </span>{" "}
              to any third party.
            </p>
            <p className="text-gray-700 text-base sm:text-lg">
              We <span className="font-bold text-blue-600">don’t record</span>{" "}
              your payment method or any information about any cards you used.
            </p>
            <p className="text-gray-700 text-base sm:text-lg">
              We <span className="font-bold text-blue-600">don’t record</span>{" "}
              any data you put into MeMeY. It was built to be fully offline
              (unlike all the AI data analysis apps out there), so you can stay
              off the grid.
            </p>
            <p className="text-gray-700 text-base sm:text-lg">
              We <span className="font-bold text-blue-600">don’t record</span>{" "}
              anything else about you.
            </p>
            <p className="text-gray-700 text-base sm:text-lg font-medium">
              Why do other companies make these agreements so complicated?{" "}
              <a href="/contact-us" className="text-blue-600 hover:underline">
                Contact us
              </a>{" "}
              to discuss your privacy concerns.
            </p>
          </div>
          <div className="mt-12 sm:mt-16 text-center animate-fade-in">
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
              Have more questions about your privacy? Reach out to us!
            </p>
            <a
              href="/contact-us"
              className="inline-flex items-center justify-center text-blue-600 hover:text-blue-800 text-base sm:text-lg font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l9-6 9 6v12H3V8z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8v12h18V8"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 2v12"
                ></path>
              </svg>
              Contact Support
            </a>
          </div>
        </div>
        <style>
          {`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            .animate-fade-in {
              animation: fadeIn 1s ease-in-out;
            }
            @keyframes slideUp {
              from { transform: translateY(20px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
            .animate-slide-up {
              animation: slideUp 0.8s ease-in-out;
            }
          `}
        </style>
      </main>
    </>
  );
};

export default PrivacyPolicy;
