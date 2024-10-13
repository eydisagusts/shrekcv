import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightBlueColor: "#e0f7fa",
        whiteColor: "#ffffff",
        greenColor: "#4caf50",
        orangeColor: "#ff5722",
        yellowColor: "#ffeb3b",
        fontWhite: "#ffffff",
        fontBlack: "#333",
      },
      fontFamily: {
        arial: ['Arial', 'sans-serif'],
      },
      borderWidth: {
        '10': '1rem',
      },
    },
  },
  plugins: [],
};

export default config;