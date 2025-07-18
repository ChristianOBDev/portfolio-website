import React from "react";

interface ExperienceCardProps {
  company: string;
  role: string;
  description: string;
  bulletPoints: string[];
  skills: string[];
  logoUrl: string;
  icon: string;
  color?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  role,
  description,
  bulletPoints,
  skills,
  logoUrl,
  icon,
  color = "#ffbf00",
}) => {
  return (
    <div className="relative">
      <div
        className="shadow-shadow flex overflow-hidden flex-col border-2 rounded-lg"
        style={{ backgroundColor: color }}
      >
        <div className="grow-35 overflow-hidden border-b-2 border-black">
          <div className="flex overflow-hidden">
            <div className="bg-gray-50 flex overflow-hidden justify-center items-center p-2 border-r-2 border-black max-w-[25%]">
              <img
                alt={`${company} Logo`}
                className="object-contain"
                src={logoUrl}
              />
            </div>
            <div className="flex overflow-hidden flex-col justify-center p-4 gap-1">
              <h3 className="mb-1 text-2xl font-semibold">{company}</h3>
              <div className="mb-2 text-lg">{role}</div>
              <div className="mb-3 text-sm">{description}</div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="flex overflow-hidden">
            <div className="pt-3 pb-4 flex overflow-hidden justify-center items-start px-4 border-r-2 border-black max-w-[75%]">
              <ul className="mb-3 text-sm list-inside">
                {bulletPoints.map((point, idx) => (
                  <li key={idx} className="mb-1 text-left list-inside">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex overflow-hidden flex-wrap items-start p-4 gap-2 max-w-[30%]">
              {skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="text-blue-800 w-fit text-xs bg-blue-100 shrink-0 flex overflow-hidden justify-center items-center px-[10px] py-[2px] gap-1 border-black border-2 rounded-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="-top-6 -right-6 z-15 absolute group">
        <img
          alt={`${company} Icon`}
          className="object-contain size-16 transition-transform duration-500 group-hover:animate-spin"
          src={icon}
        />
      </div>
    </div>
  );
};

export default ExperienceCard;
