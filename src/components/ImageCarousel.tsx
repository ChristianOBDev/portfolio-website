// components/ImageCarousel.tsx
import React, { useState } from "react";

export const ImageCarousel: React.FC<{ images: string[] }> = ({ images }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative border-2 border-black overflow-hidden w-full aspect-video">
      <img
        src={images[index]}
        alt={`Slide ${index}`}
        className="w-full h-full object-cover"
      />
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white px-2 py-1 border-2 border-black font-bold"
        onClick={() => setIndex((index - 1 + images.length) % images.length)}
      >
        ‹
      </button>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white px-2 py-1 border-2 border-black font-bold"
        onClick={() => setIndex((index + 1) % images.length)}
      >
        ›
      </button>
    </div>
  );
};
