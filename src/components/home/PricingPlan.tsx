import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { IoCheckmarkOutline } from "react-icons/io5";
import { pricingPlans, PricingCardProps } from "../../constants/data.ts";

// Reusable Pricing Card Component
const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  buttonText,
  isRecommended = false,
}) => {
  return (
    <div className="group relative w-full h-[500px] md:h-[650px] lg:h-[580px] flex flex-col">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-100 to-white p-[1px] shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-500/25 flex-grow flex flex-col">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-indigo-600 opacity-10" />

        <div className="relative rounded-2xl bg-gradient-to-b from-gray-100 to-white p-6 flex-grow flex flex-col">
          <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/10 to-indigo-600/0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70" />
          <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-600/10 to-blue-500/0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70" />

          {isRecommended && (
            <div className="absolute -right-[1px] -top-[1px] overflow-hidden rounded-tr-2xl">
              <div className="absolute h-20 w-20 bg-gradient-to-r from-blue-500 to-indigo-600" />
              <div className="absolute h-20 w-20 bg-gray-100/90" />
              <div className="absolute right-0 top-[22px] h-[2px] w-[56px] rotate-45 bg-gradient-to-r from-blue-500 to-indigo-600" />
              <span className="absolute right-1 top-1 text-[10px] font-semibold text-gray-900">
                RECOMMENDED
              </span>
            </div>
          )}

          <div className="relative">
            <h3 className="text-sm font-medium uppercase tracking-wider text-blue-600">
              {title}
            </h3>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-bold text-gray-900">{price}</span>
              <span className="text-sm text-gray-500">/ year</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">{description}</p>
          </div>

          <div className="relative mt-6 space-y-4 flex-grow">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/10">
                  <IoCheckmarkOutline className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{feature}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative mt-8">
            <button
              className="group/btn relative w-full overflow-hidden rounded-lg bg-black  p-px font-semibold text-white shadow-[0_1000px_0_0_hsl(0_0%_100%_/_0%)_inset] transition-colors hover:shadow-[0_1000px_0_0_hsl(0_0%_100%_/_2%)_inset]"
              aria-label={`Purchase ${title}`}
            >
              <div className="relative rounded-lg bg-gray-900/50 px-4 py-3 transition-colors group-hover/btn:bg-transparent">
                <span className="relative flex items-center justify-center gap-2 text-sm lg:text-base">
                  {buttonText}
                  <HiOutlineArrowNarrowRight className="h-4 w-4 text-white transition-transform group-hover/btn:translate-x-1" />
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Pricing Section Component
const PricingSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-6 md:py-10">
      <div className="w-full max-w-7xl mx-auto py-8 md:py-10 lg:py-[3.35rem] px-4 xl:px-0">
        {/* Header Section */}
        <div className="text-center animate-fade-in space-y-3 mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-black to-blue-600 bg-clip-text text-transparent">
            Pricing Plans
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Affordable data analysis solutions for every need, delivering
            powerful insights without complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 items-stretch">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              buttonText={plan.buttonText}
              isRecommended={plan.isRecommended}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
