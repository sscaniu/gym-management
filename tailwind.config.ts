import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'aero': '#42BFDD',
        'apricot': '#FFCDB2',
        'delft-blue': '#363E57',
        'oxford-blue': '#1A2239',
        'bright-pink-crayola': '#FA5E83',
      },
      fontFamily: { rubik: "Rubik", jost: "Jost" },
      backgroundImage: {
        rect: "b-bg-vector-2bgyms-bbrectangle-30rectangle-1092",
        vectorcurve: 'url("/images/Vector2.svg")',
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
