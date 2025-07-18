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

const CyberEscape: React.FC = () => {
  return (
    <section className="flex justify-left">
      <Card
        className="border-2 border-black rounded-xl shadow-shadow"
        style={{ backgroundColor: colors.background.orange }}
      >
        <CardHeader>
          <CardTitle className="text-4xl font-bold">
            MOONHUB Cyber Escape
          </CardTitle>
        </CardHeader>
        <CardContent>
          <VideoEmbed youtubeId="hoYmMRtI5cQ" />
        </CardContent>
        <CardDescription className="px-6">
          Developed for a corporate client in the cyber security industry, the
          Cyber Security Escape Room is MOONHUB’s first fully immersive 3D VR
          experience. Built for Oculus Quest 2 using Unity and the XR
          Interaction Toolkit, the experience challenges users to extract
          sensitive data from a virtual environment while avoiding common cyber
          threats. It was showcased at a major industry exposition, where it
          received highly positive feedback. I led the project end to end,
          designing the experience based on a real-world version operated by the
          client. My responsibilities included programming, level design, asset
          curation and modelling, animation, sound design, UI/UX, and final
          deployment. This project reflects my ability to independently deliver
          engaging, technically complex VR content from concept to completion.
        </CardDescription>
      </Card>
    </section>
  );
};

export default CyberEscape;
