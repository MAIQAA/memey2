import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Analytics } from "@vercel/analytics/react";
import Home from "./home/home.tsx";
import BluePillSection from "./blue-pill/bluePillPage.tsx";
import RedPillSection from "./red-pill/redPillPage.tsx";
import HelpSection from "./help/helpPage.tsx";
import PrivacyPolicy from "./privacyPolicy/privacyPolicyPage.tsx";
import WalkThrough from "./walkthrough/walkThroughPage.tsx";
import FAQPage from "./faq/faqPage.tsx";
import FeaturesPage from "./features/featuresPage.tsx";
import { FaCircleChevronUp } from "react-icons/fa6";
import SmoothScrollLink from "./components/SmoothScrollLink.tsx";
import ContactPage from "./contact-us/ContactPage.tsx";
import NotFound from "./components/not-found/NotFound.tsx";

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const halfPage = window.innerHeight / 2;
      setShowScrollButton(window.scrollY > halfPage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="mt-16 md:mt-[4.15rem]" id="top">
      <Analytics />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/red-pill" element={<RedPillSection />} />
        <Route path="/blue-pill" element={<BluePillSection />} />
        <Route path="/help" element={<HelpSection />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/walkthrough" element={<WalkThrough />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {showScrollButton && (
        <SmoothScrollLink href="#top">
          <FaCircleChevronUp
            className="fixed bottom-10 right-7 animate-bounce z-50 bg-white rounded-full"
            size={45}
          />
        </SmoothScrollLink>
      )}
    </main>
  );
}

export default App;
