import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { BiSupport } from "react-icons/bi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { faqs } from "../constants/data.ts";

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [email, setEmail] = useState<string>("");
  const [postPaymentCode, setPostPaymentCode] = useState<string>("");
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
    setShowConfirmation(false); // Reset confirmation on toggle
    setErrorMessage(""); // Reset error message on toggle
  };

  const handleCancelSubscription = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(""); // Clear any previous error

    const webhookUrl = process.env.REACT_APP_ZAPIER_WEBHOOK;
    if (!webhookUrl) {
      setErrorMessage("Configuration error. Please contact support.");
      console.error(
        "REACT_APP_ZAPIER_WEBHOOK is not defined in environment variables."
      );
      return;
    }

    const alphanumeric = `${postPaymentCode},${email}`;
    const url = `${webhookUrl}?alphanumeric=${encodeURIComponent(
      alphanumeric
    )}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        mode: "no-cors", // Use no-cors to bypass CORS restrictions
      });
      // Since 'no-cors' mode doesn't allow reading response status, assume success
      setShowConfirmation(true);
      setEmail(""); // Clear email field
      setPostPaymentCode(""); // Clear post payment code field
    } catch (error) {
      console.error("Error submitting cancellation:", error);
      setErrorMessage(
        "Failed to submit cancellation. Please try again or contact support."
      );
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      ...faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
      {
        "@type": "Question",
        name: "How do I cancel my subscription?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To cancel your subscription, please provide your email and Post Payment Code below.",
        },
      },
    ],
    publisher: {
      "@type": "Organization",
      name: "MeMeY",
      logo: {
        "@type": "ImageObject",
        url: "https://memey.cloud/mmy-logo.webp",
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>MeMeY FAQs | Data Analysis Questions Answered</title>
        <meta
          name="description"
          content="Find answers to common questions about MeMeY, the student-focused data analysis platform. Learn about features, usage, and support."
        />
        <meta
          name="keywords"
          content="MeMeY FAQs, data analysis FAQs, student data analysis, menu measurement support"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="MeMeY Team" />
        <meta property="og:title" content="MeMeY FAQs" />
        <meta
          property="og:description"
          content="Explore FAQs about MeMeY, the data analysis tool for students. Get answers on features, usage, and support."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://memey.cloud/faq" />
        <meta property="og:image" content="https://memey.cloud/mmy-logo.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MeMeY FAQs" />
        <meta
          name="twitter:description"
          content="Explore FAQs about MeMeY, the data analysis tool for students."
        />
        <meta
          name="twitter:image"
          content="https://memey.cloud/mmy-logo.webp"
        />
        <link rel="canonical" href="https://memey.cloud/faq" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <main className="relative bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="text-center animate-fade-in">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-black to-blue-600 bg-clip-text text-transparent mb-6 sm:mb-8">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Find answers to common questions about using MeMeY, the simplest
              data analysis tool for students.
            </p>
          </div>
          <div className="mt-12 sm:mt-16 animate-fade-in">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center px-4 sm:px-6 py-4 text-left focus:outline-none"
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    <span className="text-base sm:text-lg font-medium text-gray-800 break-words">
                      {faq.question}
                    </span>
                    {openIndex === index ? (
                      <FaChevronUp className="text-gray-600 w-5 h-5 flex-shrink-0" />
                    ) : (
                      <FaChevronDown className="text-gray-600 w-5 h-5 flex-shrink-0" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div
                      id={`faq-answer-${index}`}
                      className="px-4 sm:px-6 py-4 text-gray-700 text-base sm:text-lg leading-relaxed break-words"
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                    >
                      <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
                    </div>
                  )}
                </div>
              ))}
              <div className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <button
                  onClick={() => toggleFAQ(faqs.length)}
                  className="w-full flex justify-between items-center px-4 sm:px-6 py-4 text-left focus:outline-none"
                  aria-expanded={openIndex === faqs.length}
                  aria-controls={`faq-answer-${faqs.length}`}
                  id={`faq-question-${faqs.length}`}
                >
                  <span className="text-base sm:text-lg font-medium text-gray-800 break-words">
                    How do I cancel my subscription?
                  </span>
                  {openIndex === faqs.length ? (
                    <FaChevronUp className="text-gray-600 w-5 h-5 flex-shrink-0" />
                  ) : (
                    <FaChevronDown className="text-gray-600 w-5 h-5 flex-shrink-0" />
                  )}
                </button>
                {openIndex === faqs.length && (
                  <div
                    id={`faq-answer-${faqs.length}`}
                    className="px-4 sm:px-6 py-4 text-gray-700 text-base sm:text-lg leading-relaxed break-words"
                    role="region"
                    aria-labelledby={`faq-question-${faqs.length}`}
                  >
                    {showConfirmation ? (
                      <div
                        className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                        role="alert"
                      >
                        <p className="font-medium">
                          Check your email for verification. Sorry to see you
                          go!
                        </p>
                      </div>
                    ) : (
                      <form
                        onSubmit={handleCancelSubscription}
                        className="space-y-4"
                      >
                        {errorMessage && (
                          <div
                            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                            role="alert"
                          >
                            <p className="font-medium">{errorMessage}</p>
                          </div>
                        )}
                        <div className="flex flex-col md:flex-row items-start justify-between gap-4 lg:gap-6">
                          <div className="w-full md:w-1/2">
                            <input
                              type="email"
                              id="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="Enter your Email"
                              required
                              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                          </div>
                          <div className="w-full md:w-1/2">
                            <input
                              type="text"
                              id="postPaymentCode"
                              value={postPaymentCode}
                              onChange={(e) =>
                                setPostPaymentCode(e.target.value)
                              }
                              placeholder="Post Payment Code"
                              required
                              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                            <p className="mt-1 text-sm text-gray-500">
                              This is the code you received when you first
                              subscribed to MeasureMenuY, which came in an email
                              titled "Your MeMeY subscription".
                            </p>
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Cancel Subscription
                        </button>
                      </form>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 text-center animate-fade-in">
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Still need help? Visit our{" "}
              <a href="/help" className="text-blue-600 hover:underline">
                Help page
              </a>{" "}
              for more resources or contact our support team!
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="/help"
                className="inline-flex items-center justify-center text-blue-600 hover:text-blue-800 text-base sm:text-lg font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Go to Help Page
              </a>
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center text-blue-600 hover:text-blue-800 text-base sm:text-lg font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <BiSupport className="w-5 h-5 mr-2" />
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default FAQPage;
