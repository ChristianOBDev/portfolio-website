export interface Experience {
  company: string;
  role: string;
  description: string;
  bulletPoints: string[];
  skills: string[];
  logoUrl: string;
  color: string;
  icon: string;
}

export const experience: Experience[] = [
  {
    company: "MOONHUB",
    role: "Unity Developer",
    description:
      "Developed immersive VR training solutions for enterprise clients, focusing on scalability and user experience.",
    bulletPoints: [
      "Sole Unity Developer in an agile cross-functional team delivering bespoke VR training for enterprise clients.",
      "Designed and implemented scalable system architecture to support immersive and reusable training experiences.",
      "Collaborated closely with product managers, designers, and QA to iterate quickly and deliver highquality, user-focused features.",
      "Created internal Unity development workflows, technical documentation, and testing protocols to support maintainability.",
    ],
    skills: [
      "Unity",
      "C#",
      "Git",
      "VR Development",
      "XR Interaction Toolkit",
      "Agile Methodologies",
      "UI/UX Design",
      "Technical Documentation",
    ],
    logoUrl: "/assets/logos/moonhub_logo.webp",
    color: "#ffbf00", // amber
    icon: "/assets/icons/virtual-reality.webp",
  },
  {
    company: "Phantasm Studio",
    role: "Unity Developer",
    description:
      "Developed real-time visualization software for high-profile film franchises, focusing on programming, UI/UX, and technical documentation.",
    bulletPoints: [
      "Developed core functionality and interactive features for Phantasm's real-time Virtual Visualization software using Unity and C#.",
      "Led UI/UX design and implementation, ensuring responsive and intuitive interfaces for client-facing applications.",
      "Authored technical documentation and provided user assistance to support deployment and usage of the application.",
      "Contributed to high-profile visualization projects used in franchises including Mission: Impossible and Fast & Furious.",
    ],
    skills: [
      "Unity",
      "C#",
      "Plastic SCM",
      "Unity Version Control",
      "UI/UX Design",
      "Technical Documentation",
      "Real-time Visualization",
    ],
    logoUrl: "/assets/logos/phantasm_logo_invert.png",
    color: "#00d696", // emerald
    icon: "/assets/icons/camera.webp",
  },
  {
    company: "Activision-Blizzard",
    role: "QA Tester",
    description:
      "Performed quality assurance testing on AAA titles, regressing issues and ensuring adherence to targets of quality and performance.",
    bulletPoints: [
      "Conducted comprehensive testing on AAA titles, identifying and documenting bugs and performance issues.",
      "Collaborated with developers and QA leads to ensure timely resolution of critical issues.",
      "Maintained detailed logs and used bug tracking systems to support quality assurance efforts.",
    ],
    skills: [
      "Jira",
      "Quality Assurance",
      "Bug Tracking",
      "Performance Testing",
      "Collaboration",
      "Documentation",
    ],
    logoUrl: "/assets/logos/Activision_Blizzard_logo.webp",
    color: "#0099ff", // sky
    icon: "/assets/icons/game-controller.webp",
  },
];
