import { experience } from "@/data/experience";
import ExperienceCard from "@/components/ExperienceCard";
import { colors } from "@/data/colors";

const Experience: React.FC = () => {
  return (
    <section id="experience">
      <div
        className="w-full graph-bg px-16 py-12 flex flex-col items-center justify-center border-b-black border-b-[4px]"
        style={{ backgroundColor: colors.background.pink }}
      >
        <h2 className="text-3xl font-bold mb-8 text-left w-full">
          Places I've worked
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-center w-full">
          {experience.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
