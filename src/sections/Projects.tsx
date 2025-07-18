import React from "react";
import Fingerspeller from "./projects/Fingerspeller";
import VV from "./projects/VV";
import CyberEscape from "./projects/CyberEscape";
import MiniGames from "./projects/MiniGames";
import Websites from "./projects/Websites";
import { colors } from "@/data/colors";

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="w-full graph-bg px-16 py-12 border-b-black border-b-[4px]"
      style={{ backgroundColor: colors.background.yellow }}
    >
      <h2 className="text-3xl font-bold mb-8 text-left w-full">
        Projects I've worked on
      </h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-stretch">
        <div className="col-span-full lg:col-span-4">
          <Fingerspeller />
        </div>

        <div className="col-span-full md:col-span-2 lg:col-span-2 h-full">
          <div className="flex h-full">
            <VV />
          </div>
        </div>
        <div className="col-span-full md:col-span-2 lg:col-span-2 h-full">
          <div className="flex">
            <CyberEscape />
          </div>
        </div>
        <div className="col-span-full lg:col-span-4 flex h-full">
          <Websites />
        </div>
        <div className="col-span-full lg:col-span-full h-full">
          <MiniGames />
        </div>
      </div>
    </section>
  );
};

export default Projects;
