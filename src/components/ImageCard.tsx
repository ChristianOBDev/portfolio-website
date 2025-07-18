import React from "react";

interface ImageCardProps {
  src: string;
  alt?: string;
  caption?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({
  src,
  alt = "",
  caption,
  width = "100%",
  height = "auto",
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col items-center overflow-hidden rounded-base border-2 border-border bg-main font-base shadow-shadow ${className}`}
      style={{ width }}
    >
      <div
        className="w-full flex items-center justify-center bg-white"
        style={{ aspectRatio: "auto", height }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </div>
      <hr className="w-full border-t-2 text-main-foreground border-border p-2 pt-0" />
      {caption && <div className="px-4 pb-2">{caption}</div>}
    </div>
  );
};

export default ImageCard;
