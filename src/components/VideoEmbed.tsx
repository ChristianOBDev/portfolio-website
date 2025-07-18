// components/VideoEmbed.tsx
import React from "react";

export const VideoEmbed: React.FC<{ youtubeId: string }> = ({ youtubeId }) => (
  <div className="aspect-video w-full border-4 border-black shadow-shadow rounded-xl overflow-hidden h-full">
    <iframe
      className="w-full h-full"
      src={`https://www.youtube.com/embed/${youtubeId}`}
      title="YouTube video"
      allowFullScreen
    />
  </div>
);
