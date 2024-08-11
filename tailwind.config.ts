import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "galactic-blue": "#755CDE",
      yellow: "#F6A560",
      "light-pink": "#F39E9E",
      "light-red": "#EB7565",
      cyan: "#61C4B7",
      "dark-purple": "#552049",
      black: "#030303",
      white: "#FFFFFF",
      "medium-brown": "#7A746E",
      "light-cream": "#FFF7F0",
    },
    fontFamily: {
      sans: ["var(--font-base)"],
    },
    screens: {
      xl: { max: "1440px" },
      // => @media (max-width: 1440px) { ... }

      lg: { max: "1024px" },
      // => @media (max-width: 1024px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 768px) { ... }

      sm: { max: "480px" },
      // => @media (max-width: 480px) { ... }
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          scaling: (value: any) => {
            const [property, ...values] = value.split(",");
            const [x1, x2, y1, y2] = values.map((val: string) =>
              parseFloat(val)
            );

            const m = (x2 - x1) / (y2 - y1);
            const c = -1 * y1 * m + x1;

            console.log(m, c);
            return {
              [property]: `clamp( ${x1}rem, ${c}rem + ${m * 100}vw, ${x2}rem )`,
            };
          },
        },
        { values: theme("scaling") }
      );
    }),
  ],
};
export default config;
