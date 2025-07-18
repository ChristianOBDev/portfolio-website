import { Card } from "@/components/ui/card";
import Carousel from "react-multi-carousel";
import races from "@/data/races";
import { colors } from "@/data/colors";

const backgroundColors = Object.values(colors.background);

const Races = () => {
  // Helper to get a random color for each card
  const getRandomBg = (idx: number) =>
    backgroundColors[idx % backgroundColors.length];
  return (
    <section
      className="w-full graph-bg px-16 py-12 border-b-black border-b-[4px]"
      style={{ backgroundColor: colors.background.green }}
      id="races"
    >
      <h2 className="text-3xl font-bold mb-8 text-left w-full">Races</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {races.map((race, idx) => (
          <Card
            key={idx}
            className="p-4 flex flex-col gap-4"
            style={{ backgroundColor: getRandomBg(idx) }}
          >
            <h3 className="text-xl font-semibold">{race.title}</h3>
            <p>{race.date}</p>
            <Carousel
              arrows
              autoPlay={true}
              autoPlaySpeed={3000}
              containerClass="carousel-container"
              draggable
              focusOnSelect={false}
              infinite
              itemClass="carousel-item-padding-40-px"
              keyBoardControl
              minimumTouchDrag={80}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                superLargeDesktop: {
                  breakpoint: { max: 4000, min: 1024 },
                  items: 1,
                },
                desktop: {
                  breakpoint: { max: 1024, min: 768 },
                  items: 1,
                },
                tablet: {
                  breakpoint: { max: 768, min: 464 },
                  items: 1,
                },
                mobile: {
                  breakpoint: { max: 464, min: 0 },
                  items: 1,
                },
              }}
              showDots={true}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              {race.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={race.title + " image " + (i + 1)}
                  className="w-full h-full object-cover rounded"
                />
              ))}
            </Carousel>
            <div className="mt-2">
              <span className="font-medium">Distance:</span> {race.distance}
              <br />
              <span className="font-medium">Time:</span> {race.time}
            </div>
            <div className="mt-2 text-sm text-gray-700">{race.report}</div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Races;
