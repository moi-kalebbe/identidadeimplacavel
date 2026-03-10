import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ["'Cinzel'", "serif"],
        playfair: ["'Playfair Display'", "serif"],
        jost: ["'Jost'", "sans-serif"],
      },
      colors: {
        gold: "#9A7318",
        "gold-light": "#C9A84C",
        "gold-pale": "#F0DDA8",
        brown: "#6B5020",
        cream: "#F0EBE0",
        sand: "#E8DFD0",
      },
    },
  },
  plugins: [],
};
export default config;

