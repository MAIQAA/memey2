import React from "react";
import { HiCursorClick } from "react-icons/hi";
import { FaChartPie, FaList } from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { MdPrivacyTip } from "react-icons/md";
import { MdDocumentScanner } from "react-icons/md";
import { GrSecure } from "react-icons/gr";
import { CgPerformance } from "react-icons/cg";
import { MdGroups3 } from "react-icons/md";

const featuresPage = () => {
  const features = [
    {
      icon: <HiCursorClick />,
      title: "One-Click Automatic Analysis",
      description:
        "MeMeY eliminates manual data work with powerful algorithms. It automatically compares dataset columns, conducts hypothesis tests, and highlights significant relationships. No need to choose tests—MeMeY handles it all, saving time and effort for users of any skill level.",
      keywords: ["automatic data analysis", "no-code tool"],
    },
    {
      icon: <FaChartPie />,
      title: "Hypothesis Testing with Smart Statistics",
      description:
        "MeMeY uses nonparametric tests to find provable data relationships, avoiding assumptions. Results include p-values, alpha thresholds, and clear statements. The Interpretation Assistant button explains outcomes in plain English, making complex statistics accessible to everyone.",
      keywords: ["hypothesis testing software", "statistical analysis"],
    },
    {
      icon: <FaHandsHelping />,
      title: "Built-in Interpretation Assistance",
      description:
        "MeMeY simplifies statistical results for all users. Each result includes a “What does this mean?” guide with instant context, implications, and recommendations. It’s perfect for beginners, ensuring data insights are clear without needing a statistics background.",
      keywords: ["data insight tool", "beginner-friendly analysis"],
    },
    {
      icon: <PiMicrosoftExcelLogoFill />,
      title: "Excel-Compatible Reports",
      description:
        "Easily share or explore MeMeY results in Excel. Copy tables or individual results directly. Export graphs as images for reports. Use MeMeY’s interactive table or download for offline analysis, making data sharing seamless and efficient.",
      keywords: ["export data analysis to Excel"],
    },
    {
      icon: <MdPrivacyTip />,
      title: "Local Processing = Complete Data Privacy",
      description:
        "MeMeY runs locally, ensuring no data is uploaded online. Ideal for medical or confidential datasets, it requires no identifier removal. Compliant with HIPAA and GDPR, it offers secure analysis for sensitive research and business needs.",
      keywords: ["secure data analysis", "HIPAA-compliant"],
    },
    {
      icon: <MdDocumentScanner />,
      title: "Bulk Testing Without Guesswork",
      description:
        "MeMeY scans entire datasets automatically, unlike tools analyzing one variable at a time. It supports massive datasets, eliminates guessing, and highlights key patterns and trends, helping users uncover insights they might otherwise miss.",
      keywords: ["data scanning tool", "full dataset analysis"],
    },
    {
      icon: <FaList />,
      title: "Visual + List-Based Insights",
      description:
        "MeMeY combines box-and-whisker plots with a List View showing precise values and outliers. This dual approach prevents misinterpretations, helping users understand data at both macro and micro levels for clearer, more accurate insights.",
      keywords: ["data visualization", "outlier detection"],
    },
    {
      icon: <GrSecure />,
      title: "Built-in Safety Rails Against Mistakes",
      description:
        "MeMeY prevents errors with guardrails, blocking incorrect methods and using adaptable algorithms. It ensures reliable results, offering professional accuracy. Beginners can analyze data confidently without a data science degree, reducing costly mistakes.",
      keywords: ["error-proof analysis tool", "beginner-safe statistics"],
    },
    {
      icon: <CgPerformance />,
      title: "Lightning Fast Performance",
      description:
        "Built in Go, MeMeY outperforms Python or R, processing large datasets in seconds. Running locally, it delivers unmatched speed for academics, analysts, and businesses needing quick results without compromising on accuracy or reliability.",
      keywords: ["fast data analysis software"],
    },
    {
      icon: <MdGroups3 />,
      title: "Designed for Everyone",
      description:
        "MeMeY suits small business owners, medical researchers, students, or teachers. It simplifies complex data analysis, making it clear, fast, and engaging. Regardless of expertise, MeMeY adapts to deliver insights for diverse analytical needs.",
      keywords: [],
    },
  ];

  return (
    <main className="relative bg-gradient-to-b from-gray-50 to-white">
      <div className="space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 lg:pt-16">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center animate-fade-in">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 md:mb-8">
            Features of MeasureMenuY
          </h1>
          <p className="max-w-4xl">
            MeasureMenuY (MeMeY) is an intelligent data analysis platform that
            turns raw data into clear insights — without the need for coding or
            complex statistics. Whether you’re a researcher, business owner, or
            student, MeMeY helps you analyze data faster, better, and with
            confidence.
          </p>
        </div>

        <div className="w-full">
          <div className="flex flex-wrap justify-center items-center gap-8 my-8 sm:my-10 lg:my-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="w-[300px] h-[400px] md:w-[330px] md:h-[430px] xl:w-[350px] xl:h-[400px] bg-white shadow-lg p-9 space-y-3 relative overflow-hidden hover:scale-95 transition-transform duration-300"
              >
                <div className="w-24 h-24 bg-blue-500 rounded-full absolute -right-5 -top-7">
                  <p className="absolute bottom-6 left-7 text-white text-2xl">
                    {index + 1}
                  </p>
                </div>
                <div className="text-blue-500 text-5xl absolute top-2">{feature.icon}</div>
                <h1 className="font-bold text-xl pt-10">{feature.title}</h1>
                <p className="text-sm text-zinc-500 leading-6">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default featuresPage;
