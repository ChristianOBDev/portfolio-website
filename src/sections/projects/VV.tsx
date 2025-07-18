import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { VideoEmbed } from "@/components/VideoEmbed";
import { colors } from "@/data/colors";

const VV: React.FC = () => {
  return (
    <section className="flex justify-left">
      <Card
        className="border-2 border-black rounded-xl shadow-shadow"
        style={{ backgroundColor: colors.background.purple }}
      >
        <CardHeader>
          <CardTitle className="text-4xl font-bold">
            Phantasm Virtual Visualization
          </CardTitle>
        </CardHeader>
        <CardContent>
          <VideoEmbed youtubeId="PJ537eJBQ-o" />
        </CardContent>
        <CardDescription className="px-6">
          Virtual Visualisation is a 3D pre-production tool that enables
          filmmakers to plan scenes, design sets, and choreograph shots in a
          virtual environment. Used on major films like Mission: Impossible and
          Fast & Furious, it supports real-time camera placement and scene
          blocking. As a Unity Developer, I implemented core features in C#,
          developed intuitive UI for scene navigation, and maintained clear
          technical documentation. I also provided hands-on support to
          production teams. This project launched my career in creative
          technology, combining problem-solving with a passion for film and
          immersive tools.
        </CardDescription>
      </Card>
    </section>
  );
};

export default VV;
