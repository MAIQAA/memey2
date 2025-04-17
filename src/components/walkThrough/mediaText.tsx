import React, { useState } from "react";

interface MediaTextProps {
  factNumber: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageCaption: string;
  imageSrcSet: string;
  imageSizes: string;
  imageOnRight?: boolean;
}

const MediaText: React.FC<MediaTextProps> = ({
  factNumber,
  description,
  imageSrc,
  imageAlt,
  imageCaption,
  imageSrcSet,
  imageSizes,
  imageOnRight = false,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <section className="z-50">
      <div
        className={`flex flex-col ${
          imageOnRight ? "md:flex-row-reverse" : "md:flex-row"
        } gap-6 md:gap-8 items-center animate-fade-in`}
      >
        {/* Image */}
        <div className="w-full md:w-2/5">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto rounded-lg shadow-md cursor-pointer"
            srcSet={imageSrcSet}
            sizes={imageSizes}
            loading="lazy"
            onClick={openPopup}
          />
          <p className="text-gray-600 text-sm mt-2 text-center italic">
            {imageCaption}
          </p>
        </div>
        {/* Content */}
        <div className="w-full md:w-3/5">
          <p className="text-gray-700 text-base sm:text-lg">
            <strong>{factNumber}</strong>{" "}
            <span className="italic">{description}</span>
          </p>
        </div>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          style={{ zIndex: 999 }}
          onClick={closePopup}
        >
          <div
            className="relative bg-white rounded-lg p-4 max-w-3xl w-full mx-4 z-50"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <button
              className="absolute top-2 right-2 md:-top-2 md:-right-8 text-gray-600 md:text-white hover:text-gray-400 text-2xl font-bold"
              onClick={closePopup}
              aria-label="Close popup"
            >
              &times;
            </button>
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-auto rounded-lg"
              srcSet={imageSrcSet}
              sizes={imageSizes}
            />
            <p className="text-gray-600 text-sm mt-2 text-center italic">
              {imageCaption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default MediaText;
