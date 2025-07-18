import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { VideoEmbed } from "@/components/VideoEmbed";

const TrafficJam: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Card
      className={`border-2 border-black rounded-xl shadow-shadow h-full ${className}`}
    >
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Traffic Jam</CardTitle>
        <CardDescription>
          A mobile-minded mini game about picking up cash and avoiding traffic.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col h-full justify-end">
        <VideoEmbed youtubeId="23h-fYOC7no" />
      </CardContent>
    </Card>
  );
};

export default TrafficJam;
