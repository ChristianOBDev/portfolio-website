import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const pics = [
  "src/assets/WIK/WIK_1.webp",
  "src/assets/WIK/WIK_2.webp",
  "src/assets/WIK/WIK_3.webp",
  "src/assets/WIK/WIK_4.webp",
  "src/assets/WIK/WIK_5.webp",
  "src/assets/WIK/WIK_6.webp",
  "src/assets/WIK/WIK_7.webp",
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1200 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1200, min: 992 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 992, min: 768 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const WhereIsKazakhstan: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Card
      className={`border-2 border-black rounded-xl shadow-shadow ${className}`}
    >
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Where is Kazakhstan
        </CardTitle>
        <CardDescription>
          A party game based on the minigame from BBC’s Richard Osman’s House of
          Games
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-end justify-center">
        <div className="sm:w-full h-full">
          <Carousel
            responsive={responsive}
            showDots={false}
            arrows={true}
            infinite={true}
            autoPlay={false}
            containerClass="carousel-container"
            itemClass="carousel-item-padding-40-px"
          >
            {pics.map((src, index) => (
              <div key={index} className="p-1">
                <Card className="p-0">
                  <CardContent className="flex items-center justify-center p-0">
                    <img
                      src={src}
                      alt={`Where is Kazakhstan image ${index}`}
                      className="object-cover w-full h-full"
                    />
                  </CardContent>
                </Card>
              </div>
            ))}
          </Carousel>
        </div>
      </CardContent>
    </Card>
  );
};

export default WhereIsKazakhstan;
