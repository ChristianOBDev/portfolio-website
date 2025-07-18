import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { about } from "@/data/about";
import Star1 from "@/components/stars/s1";
import Star10 from "@/components/stars/s10";
import Star15 from "@/components/stars/s15";
import { colors } from "@/data/colors";
const headshot = "/assets/headshot_transparent_bg_extra.webp";

const Hero: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full graph-bg text-black h-[60vh] overflow-hidden border-b-black border-b-[4px]"
      style={{ backgroundColor: colors.background.blue }}
    >
      {/* Background image for mobile */}
      <div className="absolute inset-0 lg:hidden z-0">
        <img
          src={headshot}
          alt="Christian"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-[#b6e9eb]/60"></div>
      </div>

      {/* Floating Stars */}
      <div className="absolute top-10 left-10 w-8 h-8 animate-bounce text-yellow-400">
        <Star1 />
      </div>
      <div className="absolute bottom-10 right-20 w-10 h-10 animate-bounce text-blue-400">
        <Star10 />
      </div>
      <div
        className="absolute top-1/3 left-5/8 w-12 h-12 animate-bounce text-green-400"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <Star15 />
      </div>

      <div className="flex h-full">
        {/* Left Side Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 lg:px-16 z-10 space-y-4">
          <h1 className="text-6xl lg:text-7xl font-extrabold uppercase leading-tight">
            Christian O'Brien
          </h1>

          <h3 className="text-4xl font-mono">
            Ultra Runner. Creative Developer.
          </h3>

          <div className="w-full h-3/8">
            <ScrollArea
              className="rounded-base h-full text-main-foreground border-2 border-border p-4 shadow-shadow"
              style={{
                whiteSpace: "pre-line",
                backgroundColor: colors.primary.blue,
              }}
            >
              {about.bio}
            </ScrollArea>
          </div>
        </div>

        {/* Right Side Image for large screens only */}
        <div className="hidden lg:flex w-1/2 h-full justify-end">
          <img
            src={headshot}
            alt="Christian"
            className="w-3/4 h-auto object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
