// import { IoCodeSlashSharp } from "react-icons/io5";
// import { FaFileExcel } from "react-icons/fa6";
// import { FaBrain } from "react-icons/fa6";
// import { FaRobot } from "react-icons/fa";
// import React, { useState } from "react";

// const ComparisonCard = ({
//   icon: Icon,
//   title,
//   features,
// }: {
//   icon: React.ComponentType<{ className?: string }>;
//   title: string;
//   features: string[];
// }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className={`text-center place-items-center p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
//         isHovered
//           ? "bg-gradient-to-br from-black/5 to-white border-2 border-black/20"
//           : "bg-white"
//       }`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <Icon
//         className={`text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4 ${
//           isHovered ? "text-black" : "text-gray-400"
//         }`}
//       />
//       <h3
//         className={`font-semibold text-sm sm:text-base lg:text-lg ${
//           isHovered ? "text-black" : "text-gray-400"
//         }`}
//       >
//         {title}
//       </h3>
//       <div className="mt-2 sm:mt-4">
//         {features.map((feature, index) => (
//           <p
//             key={index}
//             className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2"
//           >
//             {feature}
//           </p>
//         ))}
//       </div>
//     </div>
//   );
// };

// const Comparison = () => {
//   const comparisons = [
//     {
//       icon: IoCodeSlashSharp,
//       title: "Traditional Code",
//       features: [
//         "✓ Flexible",
//         "✕ Complex Setup",
//         "✕ Manual Work",
//         "✕ Coding Skills",
//       ],
//     },
//     {
//       icon: FaFileExcel,
//       title: "Excel",
//       features: [
//         "✓ Easy to Use",
//         "✓ Basic Analysis",
//         "✕ Limited Features",
//         "✕ No AI Support",
//       ],
//     },
//     {
//       icon: FaBrain,
//       title: "MeMeY",
//       features: [
//         "✓ One-Click Analysis",
//         "✓ AI-Powered",
//         "✓ Auto Reporting",
//         "✓ No Code Needed",
//       ],
//     },
//     {
//       icon: FaRobot,
//       title: "Other AI Tools",
//       features: [
//         "✓ AI Features",
//         "✕ High Cost",
//         "✕ Limited Export",
//         "✕ Complex UI",
//       ],
//     },
//   ];

//   return (
//     <main
//       className="relative mt-12 sm:mt-16 md:mt-[4.15rem] bg-gradient-to-t from-gray-50 to-white"
//       id="Comparison"
//     >
//       <div className="w-full max-w-7xl mx-auto py-8 md:py-10 lg:py-[3.35rem] px-4 md:px-0">
//         {/* Header Section */}
//         <div className="text-center animate-fade-in space-y-3 mb-8 sm:mb-12 lg:mb-16">
//           <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-black to-blue-600 bg-clip-text text-transparent">
//             Comparison
//           </h2>
//           <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
//             See how MeMeY stacks up against traditional tools and modern AI —
//             and why it wins.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-center">
//           {comparisons.map((item, index) => (
//             <ComparisonCard key={index} {...item} />
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Comparison;

import { IoCodeSlashSharp } from "react-icons/io5";
import { FaFileExcel } from "react-icons/fa6";
import { FaBrain } from "react-icons/fa6";
import { FaRobot } from "react-icons/fa";
import React from "react";

const ComparisonCard = ({
  icon: Icon,
  title,
  features,
  isHighlighted,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  features: string[];
  isHighlighted: boolean;
}) => (
  <div
    className={`text-center place-items-center p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
      isHighlighted
        ? "bg-gradient-to-br from-black/5 to-white border-2 border-black/20"
        : "bg-white"
    }`}
  >
    <Icon
      className={`text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4 ${
        isHighlighted ? "text-black" : "text-gray-400"
      }`}
    />
    <h3
      className={`font-semibold text-sm sm:text-base lg:text-lg ${
        isHighlighted ? "text-black" : "text-gray-400"
      }`}
    >
      {title}
    </h3>
    <div className="mt-2 sm:mt-4">
      {features.map((feature, index) => (
        <p
          key={index}
          className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2"
        >
          {feature}
        </p>
      ))}
    </div>
  </div>
);

const Comparison = () => {
  const comparisons = [
    {
      icon: IoCodeSlashSharp,
      title: "Traditional Code",
      features: [
        "✓ Flexible",
        "✕ Complex Setup",
        "✕ Manual Work",
        "✕ Coding Skills",
      ],
      isHighlighted: false,
    },
    {
      icon: FaFileExcel,
      title: "Excel",
      features: [
        "✓ Easy to Use",
        "✓ Basic Analysis",
        "✕ Limited Features",
        "✕ No AI Support",
      ],
      isHighlighted: false,
    },
    {
      icon: FaBrain,
      title: "MeMeY",
      features: [
        "✓ One-Click Analysis",
        "✓ AI-Powered",
        "✓ Auto Reporting",
        "✓ No Code Needed",
      ],
      isHighlighted: true,
    },
    {
      icon: FaRobot,
      title: "Other AI Tools",
      features: [
        "✓ AI Features",
        "✕ High Cost",
        "✕ Limited Export",
        "✕ Complex UI",
      ],
      isHighlighted: false,
    },
  ];

  return (
    <main
      className="relative mt-12 sm:mt-16 md:mt-[4.15rem] bg-gradient-to-t from-gray-50 to-white"
      id="Comparison"
    >
      <div className="w-full max-w-7xl mx-auto py-8 md:py-10 lg:py-[3.35rem] px-4 md:px-0">
        {/* Header Section */}
        <div className="text-center animate-fade-in space-y-3 mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-black to-blue-600 bg-clip-text text-transparent">
            Comparison
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            See how MeMeY stacks up against traditional tools and modern AI —
            and why it wins.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-center">
          {comparisons.map((item, index) => (
            <ComparisonCard key={index} {...item} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Comparison;
