export interface Race {
  title: string;
  date?: string;
  images: string[];
  distance: string;
  time: string;
  report: string;
}

const races: Race[] = [
  {
    title: "Pennine Barrier 50 Mile Ultramarathon 2025",
    date: "2025-05-03",
    images: [
      "/assets/running_photos/PB_1.webp",
      "/assets/running_photos/PB_2.webp",
      "/assets/running_photos/PB_3.webp",
      "/assets/running_photos/PB_4.webp",
    ],
    distance: "50 miles / 80 km",
    time: "11h 38m 17s",
    report:
      "A beautifully challenging ultramarathon through the scenic Pennine hills of Yorkshire. Technical terrain and plenty of elevation, but doing it with my friends made it unforgettable.",
  },
  {
    title: "Beat the Sunset 50KM 2025",
    date: "2025-05-31",
    images: [
      "/assets/running_photos/BTS_1.webp",
      "/assets/running_photos/BTS_2.webp",
      "/assets/running_photos/BTS_3.webp",
      "/assets/running_photos/BTS_4.webp",
      "/assets/running_photos/BTS_5.webp",
      "/assets/running_photos/BTS_6.webp",
      "/assets/running_photos/BTS_7.webp",
      "/assets/running_photos/BTS_8.webp",
      "/assets/running_photos/BTS_9.webp",
    ],
    distance: "50 km / 31 miles",
    time: "4h 17m 24s",
    report:
      "A more approachable ultra following the Thames Path and Berkshire countryside. I was pushing for the win, but after 35km in the heat, I was happy to finish in second place.",
  },
  {
    title: "BTR Liverpool Half Marathon",
    date: "2025-03-23",
    images: [
      "/assets/running_photos/BTRLH_1.webp",
      "/assets/running_photos/BTRLH_2.webp",
      "/assets/running_photos/BTRLH_3.webp",
    ],
    distance: "21.1 km / 13.1 miles",
    time: "1h 21m 11s",
    report:
      "A new Half Marathon PB! My first major race in my home city of Liverpool. The course was flat and fast with amazing support throughout, I was able to realize the efforts of a well-executed training plan.",
  },
  {
    title: "Chester Marathon 2024",
    date: "2024-10-06",
    images: [
      "/assets/running_photos/CM_1.webp",
      "/assets/running_photos/CM_2.webp",
      "/assets/running_photos/CM_4.webp",
      "/assets/running_photos/CM_5.webp",
      "/assets/running_photos/CM_6.webp",
      "/assets/running_photos/CM_7.webp",
    ],
    distance: "42.2 km / 26.2 miles",
    time: "3h 25m 17s",
    report:
      "My first marathon through the historic city of Chester. Feeling strong throughout, I enjoyed the scenic route and the enthusiastic crowd support. This race set the stage for my future marathon goals.",
  },
];

export default races;
