import React from "react";
import { FaCapsules, FaDownload, FaPills } from "react-icons/fa6";

type PathCardProps = {
  icon: React.ComponentType<{ className?: string }>;
  iconBgColor: string;
  iconColor: string;
  title: string;
  description: string;
  buttonText: string;
  buttonBgColor: string;
  buttonHoverColor: string;
  link: string;
};

const PathCard: React.FC<PathCardProps> = ({
  icon: Icon,
  iconBgColor,
  iconColor,
  title,
  description,
  buttonText,
  buttonBgColor,
  buttonHoverColor,
  link,
}) => (
  <div className="bg-white text-center p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
    <div
      className={`${iconBgColor} w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6`}
    >
      <Icon className={`${iconColor} text-xl sm:text-2xl`} />
    </div>
    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{title}</h3>
    <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
      {description}
    </p>
    <a className="text-white" href={link}>
      <button
        className={`!rounded-lg ${buttonBgColor} text-white px-4 sm:px-6 py-2 text-sm sm:text-base ${buttonHoverColor}`}
      >
        {buttonText}
      </button>
    </a>
  </div>
);

const ChoosePath = () => {
  const paths = [
    {
      icon: FaPills,
      iconBgColor: "bg-red-100",
      iconColor: "text-red-600",
      title: "Red Pill",
      description: "Discover the truth about research",
      buttonText: "Learn More",
      buttonBgColor: "bg-red-600",
      buttonHoverColor: "hover:bg-red-700",
      link: "/red-pill",
    },
    {
      icon: FaCapsules,
      iconBgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      title: "Blue Pill",
      description: "Take a guided tour of MeMeY features",
      buttonText: "Take Tour",
      buttonBgColor: "bg-blue-600",
      buttonHoverColor: "hover:bg-blue-700",
      link: "/blue-pill",
    },
    {
      icon: FaDownload,
      iconBgColor: "bg-black/10",
      iconColor: "text-black",
      title: "Direct Download",
      description: "Get started with MeMeY right away",
      buttonText: "Download Now",
      buttonBgColor: "bg-black",
      buttonHoverColor: "hover:bg-black/90",
      link: "https://www.dropbox.com/scl/fo/vs0kd7ouak67dj3dtihhq/APcMhaGyeXZ6To5ge-T3mTU?rlkey=31b82d5dypdj74g7dcahiacwe&st=lo13dbcn&dl=0",
    },
  ];

  return (
    <main className="relative mt-12 sm:mt-16 md:mt-[4.15rem]" id="choose-path">
      <div className="w-full max-w-8xl mx-auto py-8 sm:py-10 lg:py-[3.35rem] px-4 sm:px-6 lg:px-8 bg-white">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-black to-blue-600 bg-clip-text text-transparent">
          Choose Your Path
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {paths.map((path, index) => (
            <PathCard key={index} {...path} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ChoosePath;
