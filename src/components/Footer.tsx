import React from "react";
import SmoothScrollLink from "./SmoothScrollLink.tsx";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

interface Link {
  label: string;
  href: string;
  isExternal?: boolean;
}

interface FooterLinkListProps {
  title: string;
  links: Link[];
}

const FooterLinkList: React.FC<FooterLinkListProps> = ({ title, links }) => (
  <div>
    <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base text-gray-800">
      {title}
    </h4>
    <ul className="space-y-1 sm:space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          {link.isExternal ? (
            <a
              href={link.href}
              className="flex items-center text-gray-600 hover:text-black text-sm sm:text-base transition-colors duration-300"
              aria-label={link.label}
            >
              {link.label.includes("@") && (
                <FaEnvelope className="w-4 h-4 mr-2 text-gray-600" />
              )}
              {link.label.startsWith("+") && (
                <FaPhone className="w-4 h-4 mr-2 text-gray-600" />
              )}
              {link.label}
            </a>
          ) : (
            <SmoothScrollLink
              href={link.href}
              className="text-gray-600 hover:text-black text-sm sm:text-base"
            >
              {link.label}
            </SmoothScrollLink>
          )}
        </li>
      ))}
    </ul>
  </div>
);

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#Feature" },
        { label: "Comparison", href: "#Comparison" },
        {
          label: "Download",
          href: "https://www.dropbox.com/scl/fo/vs0kd7ouak67dj3dtihhq/APcMhaGyeXZ6To5ge-T3mTU?rlkey=31b82d5dypdj74g7dcahiacwe&st=lo13dbcn&dl=0",
        },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "FAQ", href: "/faq" },
        { label: "Help Center", href: "/help" },
        { label: "WalkThrough", href: "/walkthrough" },
      ],
    },
    {
      title: "Legal",
      links: [{ label: "Privacy Policy", href: "/privacy-policy" }],
    },
    {
      title: "Contact",
      links: [
        {
          label: "support@memey.cloud",
          href: "mailto:support@memey.cloud",
          isExternal: true,
        },
        {
          label: "+1-234-567-8900",
          href: "tel:+12345678900",
          isExternal: true,
        },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-200 mt-16 md:mt-32">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="w-full flex flex-col xl:flex-row gap-8 xl:gap-12 justify-between">
          {/* Logo Section */}
          <div className="w-full lg:w-auto">
            <span className="flex gap-1 items-center text-xl lg:text-2xl text-black mb-3">
              <a
                href="/"
                className="flex items-center gap-3"
                aria-label="MeMeY Home"
              >
                <img
                  src="/mmy-logo.webp"
                  width={50}
                  height={50}
                  alt="MeMeY Logo"
                  className="w-10 h-10 sm:w-12 sm:h-12"
                />
                <h5 className="hidden xl:flex" style={{ fontWeight: 550 }}>
                  MeMeY
                </h5>
              </a>
            </span>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Built for students, by students.
            </p>
          </div>

          {/* Footer Links Section */}
          <div className="flex flex-wrap gap-10 md:gap-12 lg:gap-28 xl:gap-40 w-full lg:w-fit">
            {footerSections.map((section, index) => (
              <FooterLinkList
                key={index}
                title={section.title}
                links={section.links}
              />
            ))}
          </div>
        </div>

        {/* Copyright Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-gray-200 mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 text-center text-gray-600 gap-4">
          <a
            href="https://www.youtube.com/embed/Ia97htsVDZg?rel=0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center"
            aria-label="Visit MeMeY YouTube Channel"
          >
            <FaYoutube className="w-7 h-7 hover:text-red-500 transition-colors duration-300" />
          </a>
          <p className="text-sm sm:text-base">
            © 2024 MeMeY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
