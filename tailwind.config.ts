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
        primary: "#42BFDD",
        success: "#B1FECB",
        danger: "#FA5E83",
        warning: "#FFCDB2",
        black: "#1A2239",
        white: "#FFFFFF",
        dark: "#434D6C",
        grey: "#363E57",
        

        // old
        'aero': '#42BFDD',
        'apricot': '#FFCDB2',
        'delft-blue': '#363E57',
        'oxford-blue': '#1A2239',
        'bright-pink-crayola': '#FA5E83',
        'card-blue-500': '#1A2239',
        'button-1': '#1A2239',
        'button-1-hover': '#FFFFFF',
        'button-1-bg': '#FFCDB2',
        'button-2': "#FFCDB2",
        'button-2-bg': '#1A2239',
        'button-2-border': "#FFCDB2"
      },
      fontFamily: {
        rubik: "Rubik",
        jost: "Jost",
      },
      backgroundImage: {
        rect: "b-bg-vector-2bgyms-bbrectangle-30rectangle-1092",
        vectorcurve: 'url("/images/swoosh/swoosh_1282_473.svg")',
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
