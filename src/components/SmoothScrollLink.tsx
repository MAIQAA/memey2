import React from "react";

interface SmoothScrollLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  offset?: number; // New prop for custom offset
  [key: string]: unknown;
}

const SmoothScrollLink: React.FC<SmoothScrollLinkProps> = ({
  href,
  children,
  className,
  offset = 50,
  ...rest
}) => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const elementPosition =
          targetElement.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <a href={href} onClick={handleSmoothScroll} className={className} {...rest}>
      {children}
    </a>
  );
};

export default SmoothScrollLink;
