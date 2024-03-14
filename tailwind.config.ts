import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "bluish-grey":"#313a49",
        "navy": "#202632",
        "neon-green": "hsl(150, 100%, 66%)",
      },
      fontSize: {
        "quote": "28px",
      },
      boxShadow: {
        '3xl': '0px 0px 20px 2px hsl(150, 100%, 66%)',
      }
    },
  },
  plugins: [],
};
export default config;
