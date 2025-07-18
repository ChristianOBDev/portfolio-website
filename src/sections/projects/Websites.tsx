import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { colors } from "@/data/colors";

const Websites: React.FC = () => {
  return (
    <Card
      className="border-2 border-black rounded-xl shadow-shadow"
      style={{ backgroundColor: colors.background.blue }}
    >
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Websites</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full items-stretch">
          <Card className="border-border shadow-shadow rounded-lg bg-main border-2 p-4 sm:p-5 col-span-1 h-full">
            <img
              className="rounded-[1.5rem] w-full border-2 shadow-shadow"
              src="src/assets/projects/ThisSite.png"
              alt="This Website"
            />

            <div className="text-main-foreground flex flex-col h-full justify-end">
              <CardTitle className="text-2xl font-bold">This Website</CardTitle>
              <p>
                That's right! I built this website myself using React,
                Typescript, and Tailwind CSS. It showcases my skills in web
                development and design, and serves as a portfolio for my
                projects.
              </p>
              <div className="mt-2 grid grid-cols-2 gap-5">
                <a
                  className="border-border bg-secondary-background text-foreground shadow-shadow rounded-lg  hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-4 py-2 text-center text-sm transition-all hover:shadow-none sm:text-base"
                  href="#"
                  target="_blank"
                >
                  Visit
                </a>
                <a
                  className="border-border bg-secondary-background text-foreground shadow-shadow rounded-lg  hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-4 py-2 text-center text-sm transition-all hover:shadow-none sm:text-base"
                  // href={project.repoUrl} // Github link
                  target="_blank"
                >
                  Github
                </a>
              </div>
            </div>
          </Card>
          <Card className="border-border shadow-shadow rounded-lg bg-main border-2 p-4 sm:p-5 col-span-1 h-full">
            <img
              className="rounded-[1.5rem] w-full border-2 shadow-shadow"
              src="src/assets/projects/DTP.png"
              alt="DistanceTimePace.com"
            />

            <div className="text-main-foreground flex flex-col h-full justify-end">
              <CardTitle className="text-2xl font-bold">
                DistanceTimePace.com
              </CardTitle>

              <p>
                A website for calculating distance, time, and pace for runners
                and cyclists. It features a clean design and responsive layout.
                Built with React and Bootstrap.
              </p>

              <div className="mt-2 grid grid-cols-2 gap-5">
                <a
                  className="border-border bg-secondary-background text-foreground shadow-shadow rounded-lg  hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-4 py-2 text-center text-sm transition-all hover:shadow-none sm:text-base"
                  href="https://distancetimepace.com"
                  target="_blank"
                >
                  Visit
                </a>
                <a
                  className="border-border bg-secondary-background text-foreground shadow-shadow rounded-lg  hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-4 py-2 text-center text-sm transition-all hover:shadow-none sm:text-base"
                  href="https://github.com/DistanceTimePace/pace-calculator-app"
                  target="_blank"
                >
                  Github
                </a>
              </div>
            </div>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
};

export default Websites;
