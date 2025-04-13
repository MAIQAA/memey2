import React, { useState } from "react";
import { BiSupport } from "react-icons/bi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is MeMeY?",
      answer:
        "MeMeY is a user-friendly data analysis tool designed specifically for students. It simplifies the process of analyzing research data while maintaining powerful capabilities, allowing you to focus on results rather than complexity.",
    },
    {
      question: "How do I get started with MeMeY?",
      answer:
        "To get started, sign up for an account on our website, download the MeMeY app, and follow the onboarding tutorial. You can also check out our tutorial videos on the Help page for a step-by-step guide on logging in and importing data.",
    },
    {
      question: "Is my data secure with MeMeY?",
      answer:
        "Yes, MeMeY prioritizes your privacy. We don’t sell your email or personal information to third parties, and we don’t record your payment details or any data you input into the app. MeMeY is designed to work fully offline, ensuring your data stays private. Check our Privacy Policy for more details.",
    },
    {
      question: "What kind of data can I analyze with MeMeY?",
      answer:
        "MeMeY supports a variety of data types, including spreadsheets (CSV, Excel), and allows you to perform analyses like outlier detection, regressions, summary statistics, and more. It’s built to handle both numeric and categorical data effectively.",
    },
    {
      question: "How do I contact support if I have issues?",
      answer:
        "You can reach out to our support team by emailing us at support@memey.cloud. We’re here to help with any questions or issues you encounter while using MeMeY!",
    },
  ];

  return (
    <main className="relative bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Header Section */}
        <div className="text-center animate-fade-in">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 sm:mb-8">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about using MeMeY.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 sm:mt-16 animate-fade-in">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-4 sm:px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
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
                    className="px-4 sm:px-6 py-4 bg-gray-50 text-gray-700 text-base sm:text-lg leading-relaxed break-words"
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 sm:mt-16 text-center animate-fade-in">
          <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
            Still need help? Visit our Help page for more resources or contact
            our support team!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="/help"
              className="inline-flex items-center justify-center text-blue-600 hover:text-blue-800 text-base sm:text-lg font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Go to Help Page
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
      </div>
    </main>
  );
};

export default FAQPage;
