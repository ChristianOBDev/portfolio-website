// components/ProjectCard.tsx
import React from "react";
import { VideoEmbed } from "./VideoEmbed";
import { ImageCarousel } from "./ImageCarousel";

type Project = {
  title: string;
  description: string;
  youtubeId?: string;
  images?: string[];
  link?: string;
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-[#fefefe] border-4 border-black p-6 shadow-[4px_4px_0_0_#000] space-y-4 max-w-lg">
      <h3 className="text-2xl font-extrabold uppercase">{project.title}</h3>
      <p className="text-base font-mono text-gray-800">{project.description}</p>

      {project.youtubeId && <VideoEmbed youtubeId={project.youtubeId} />}
      {project.images && <ImageCarousel images={project.images} />}

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-black text-white px-4 py-2 font-mono border-2 border-black hover:bg-white hover:text-black transition"
        >
          Visit Website
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
