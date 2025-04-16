import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="relative bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Header Section */}
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 sm:mb-8">
            Privacy Policy
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            In less than ten sentences, here’s how your data is protected.
          </p>
        </div>

        {/* Privacy Points Section */}
        <div className="mt-8 sm:mt-12 space-y-4 sm:space-y-6 animate-slide-up">
          <p className="text-gray-700 text-base sm:text-lg">
            MeMeY sends a verification code to the email you provide, so of
            course it has to grab that email to do that, but{" "}
            <span className="font-bold text-blue-600">we don’t sell that</span>{" "}
            to any third party.
          </p>
          <p className="text-gray-700 text-base sm:text-lg">
            Likewise, the email you receive has your name in it, but{" "}
            <span className="font-bold text-blue-600">we don’t sell that</span>{" "}
            to any third party.
          </p>
          <p className="text-gray-700 text-base sm:text-lg">
            We <span className="font-bold text-blue-600">don’t record</span>{" "}
            your payment method or any information about any cards you used.
          </p>
          <p className="text-gray-700 text-base sm:text-lg">
            We <span className="font-bold text-blue-600">don’t record</span> any
            data you put into MeMeY. It was built to be fully offline (unlike
            all the AI data analysis apps out there), so you can stay off the
            grid.
          </p>
          <p className="text-gray-700 text-base sm:text-lg">
            We <span className="font-bold text-blue-600">don’t record</span>{" "}
            anything else about you.
          </p>
          <p className="text-gray-700 text-base sm:text-lg font-medium">
            Why do other companies make these agreements so complicated?
          </p>
        </div>

        {/* Additional Info Section */}
        <div className="mt-12 sm:mt-16 text-center animate-fade-in">
          <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
            Have more questions about your privacy? Reach out to us!
          </p>
          <a
            href="mailto:mmy@memey.cloud"
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

      {/* Custom Animation Styles */}
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
  );
};

export default PrivacyPolicy;
