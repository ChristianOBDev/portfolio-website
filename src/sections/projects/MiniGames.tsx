import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Iconadrive from "./Iconadrive";
import TrafficJam from "./TrafficJam";
import WhereIsKazakhstan from "./WhereIsKazakhstan";
import { colors } from "@/data/colors";

const MiniGames: React.FC = () => {
  return (
    <Card
      className="border-2 border-black rounded-xl shadow-shadow"
      style={{ backgroundColor: colors.background.fuschia }}
    >
      <CardHeader>
        <CardTitle className="text-4xl font-bold">Mini Games</CardTitle>
        <CardDescription>
          A collection of small games I created to learn game development. These
          games are simple and fun, showcasing different aspects of game design
          and programming.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-stretch">
          <div className="col-span-1 h-full">
            <TrafficJam className="bg-[#ffbf00]" />
          </div>
          <div className="col-span-1 h-full">
            <Iconadrive className="bg-[#0099ff]" />
          </div>
          <div className="col-span-1 h-full">
            <WhereIsKazakhstan className="bg-[#00d696]" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MiniGames;
