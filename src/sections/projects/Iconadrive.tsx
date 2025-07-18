import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { VideoEmbed } from "@/components/VideoEmbed";

const Iconadrive: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Card
      className={`border-2 border-black rounded-xl shadow-shadow h-full ${className}`}
    >
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Iconadrive</CardTitle>
        <CardDescription>
          A procedurally generated cyberspace rading game meant to mirror the
          information packets traveling node networks across the web.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col h-full justify-end">
        <VideoEmbed youtubeId="ydM5CxGyiuY" />
      </CardContent>
    </Card>
  );
};

export default Iconadrive;
