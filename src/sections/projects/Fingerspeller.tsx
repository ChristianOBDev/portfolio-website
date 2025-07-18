import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { VideoEmbed } from "@/components/VideoEmbed";
import ImageCard from "@/components/ImageCard";
import { colors } from "@/data/colors";

const Fingerspeller: React.FC = () => {
  return (
    <section className="flex justify-left">
      <Card
        className="border-2 border-black rounded-xl shadow-shadow"
        style={{ backgroundColor: colors.background.green }}
      >
        <CardHeader>
          <CardTitle className="text-4xl font-bold">
            ASL Fingerspeller
          </CardTitle>
          <CardDescription>
            ASL Fingerspeller is an award-winning game created as part of my
            Master’s dissertation. It is a virtual reality game for the Oculus
            Quest which uses hand tracking to teach the American Sign Language
            alphabet. The game was released on SideQuest to positive reviews,
            and user testing showed the game was a useful learning tool. Below
            are videos documenting game development and how to play.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full items-stretch">
            <div className="flex items-center justify-center h-full">
              <VideoEmbed youtubeId="_HDc1fL46jQ" />
            </div>

            <img
              src="/src/assets/projects/asl.gif"
              alt="ASL Fingerspeller Gameplay"
              className="w-full border-2 border-black rounded-xl shadow-shadow"
            />
            <div className="flex items-center justify-center h-full">
              <ImageCard
                src="/src/assets/asl_certif.svg"
                alt="ASL Fingerspeller Award"
                caption="ASL Fingerspeller took first place in the Student Category of the Serious Games Competition at the Serious Games Society’s Games and Learning Alliance Conference 2020!"
                width="100%"
                className="rounded-xl"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Fingerspeller;
