import React, { useState, useCallback, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

// Define navLinks outside the component for reusability
const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Help", href: "/help" },
  { label: "FAQ", href: "/faq" },
  { label: "Walkthrough", href: "/walkthrough" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Contact Us", href: "/contact-us" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const menuRef = useRef<HTMLDivElement>(null);

  // Toggle mobile menu
  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className="fixed inset-x-0 top-0 bg-white shadow-sm"
      style={{ zIndex: 900 }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/mmy-logo.webp"
                width={50}
                height={50}
                alt="Measure Menu Y (MeMeY) Logo"
              />
              <h5 className="hidden xl:flex" style={{ fontWeight: 550 }}>
                Measure Menu Y (MeMeY)
              </h5>
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`${
                  currentPath === link.href
                    ? "text-black font-semibold"
                    : "text-gray-600"
                } hover:text-black text-sm lg:text-base transition-colors duration-200`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.dropbox.com/scl/fo/vs0kd7ouak67dj3dtihhq/APcMhaGyeXZ6To5ge-T3mTU?rlkey=31b82d5dypdj74g7dcahiacwe&st=lo13dbcn&dl=0"
              className="inline-block"
            >
              <button className="rounded-md bg-black px-4 sm:px-6 py-2 text-sm lg:text-base text-white hover:scale-105 transition-transform duration-200">
                Download
              </button>
            </a>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-black focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            ref={menuRef}
            className="md:hidden bg-white border-t border-gray-200 px-4 py-4 transition-all duration-300"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`${
                    currentPath === link.href
                      ? "text-black font-semibold"
                      : "text-gray-600"
                  } text-base hover:text-black`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://www.dropbox.com/scl/fo/vs0kd7ouak67dj3dtihhq/APcMhaGyeXZ6To5ge-T3mTU?rlkey=31b82d5dypdj74g7dcahiacwe&st=lo13dbcn&dl=0"
                className="inline-block"
              >
                <button className="rounded-md bg-black text-white px-6 py-2 text-base hover:bg-black/90 w-full">
                  Download
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
