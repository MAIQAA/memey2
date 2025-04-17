import React from "react";
import { AnimatedTestimonials } from "../ui/animated-testimonials.tsx";
import { testimonials } from "../../constants/data.ts";

const Testimonials = () => {
 

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-6 md:py-10">
      <div className="w-full max-w-7xl mx-auto py-8 md:py-10 lg:py-[3.35rem] px-4 md:px-0">
        {/* Header Section */}
        <div className="text-center animate-fade-in space-y-3 mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-black to-blue-600 bg-clip-text text-transparent">
            Testimonials
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from researchers, educators, and business owners using
            MeasureMenuY.
          </p>
        </div>

        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </section>
  );
};

export default Testimonials;
