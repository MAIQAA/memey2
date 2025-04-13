import React from "react";
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
  return (
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
          className="w-full h-auto rounded-lg shadow-md"
          srcSet={imageSrcSet}
          sizes={imageSizes}
          loading="lazy"
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
  );
};

export default MediaText;
