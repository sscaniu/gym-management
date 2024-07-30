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
        "warning-dark": "#E1A98B",
        black: "#1A2239",
        info: "#41BFDD",
        white: "#FFFFFF",
        dark: "#434D6C",
        grey: "#363E57",
        toggle: "#1F2537",
        table: {
          container: "#1E2436",
          odd: "#121522",
        },
        disable: "#D6D1CF",

        // old
        aero: "#42BFDD",
        apricot: "#FFCDB2",
        "delft-blue": "#363E57",
        "oxford-blue": "#1A2239",
        "bright-pink-crayola": "#FA5E83",
        "card-blue-500": "#1A2239",
        "button-1": "#1A2239",
        "button-1-hover": "#FFFFFF",
        "button-1-bg": "#FFCDB2",
        "button-2": "#FFCDB2",
        "button-2-bg": "#1A2239",
        "button-2-border": "#FFCDB2",
      },
      fontFamily: {
        rubik: "Rubik",
        jost: "Jost",
        roboto: "Roboto",
        ibm: "IBM Plex Sans"
      },
      fontSize: {
        xxs: "10px",
      },
      backgroundImage: {
        rect: "b-bg-vector-2bgyms-bbrectangle-30rectangle-1092",
        vectorcurve: 'url("/images/swoosh/swoosh_1282_473.svg")',
      },
      boxShadow: {
        "inset-toggle": "inset 0 0 4px 0 #1F2537",
        center: "0 0 8px 0 #00000020",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
