// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#1f1f1f",
          accent: "#ababab",
          muted: "#f5f5f5",
        },
      },
      borderRadius: {
        brutal: "0.25rem", // flat corners for neobrutalism
        blob: "1.5rem", // optional rounded style
      },
      strokeWidth: {
        default: "2px",
        thick: "4px",
      },
    },
  },
  plugins: [],
};

export default config;
