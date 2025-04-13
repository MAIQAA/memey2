import React from "react";

const BluePillSection: React.FC = () => {
  return (
    <main className="relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="relative rounded-xl overflow-hidden mx-auto">
          <div className="relative">
            <img
              loading="lazy"
              width={1024}
              height={768}
              className="w-full h-48 md:h-64 lg:h-[500px] object-cover"
              alt="Blue Pill"
              src="/blue-pill.png"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />

            <div className="absolute inset-0 bg-[#b3c3dc]/40" />

            <p className="absolute inset-0 flex items-center justify-center text-center text-xl md:text-2xl xl:text-[40px] font-bold text-[#17191b] px-4">
              A softer approach…
            </p>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 lg:mt-16 space-y-4 sm:space-y-6 text-gray-700 font-medium text-base">
          <p>What’s the simplest tool you’ve ever learned how to use?</p>
          <p>Perhaps a fork? A whistle? Glasses?</p>
          <p>
            Probably something that has one purpose, and once you’ve been taught
            what it is, there’s no way to mess it up.
          </p>
          <p>
            You probably wouldn’t say the simplest tool you’ve learned how to
            use is a swiss army knife or a fountain pen. You certainly wouldn’t
            say something like “AI agents”, “statistical computing software”, or
            “Excel”.
          </p>
          <p>
            Those tools have many little features, and there are lots of ways to
            mess it up.
          </p>
          <p>That’s one reason I made MeMeY (Measure Menu Y).</p>
          <p>
            It simplifies your entire data analysis process to just pressing the
            analyze button.
          </p>
          <p>
            It’s simpler because it was made to do the whole thing at once, in
            an effective, pre-packaged way. It doesn’t have all the
            customization options that the other tools have, which is why it’s
            able to just go.
          </p>
          <p>Sounds good, right?</p>
        </div>

        <div className="mt-8 sm:mt-12 flex justify-center">
          <a
            href="https://www.dropbox.com/scl/fo/vs0kd7ouak67dj3dtihhq/APcMhaGyeXZ6To5ge-T3mTU?rlkey=3jssbcausnjpbwv6qp9t9hgi0&st=6fm5cfcb&dl=0"
            className="inline-block rounded-lg bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium hover:bg-blue-700 transition-colors duration-300"
          >
            GET MEMEY
          </a>
        </div>
      </div>
    </main>
  );
};

export default BluePillSection;
