import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      transitionProperty: {
        backgroundColor: "background-color",
        textColor: "color",
      },
      colors: {
        // Light mode colors
        lightBackground: "#ffffff", // Light background color
        lightText: "#000000", // Light text color

        // Dark mode colors (these will apply when `dark` class is active)
        darkBackground: "#1a1a1a", // Dark background color
        darkText: "#ffffff", // Dark text color
        darkBorder: "#333333", // Dark border color
      },
    },
  },
  plugins: [],
} satisfies Config;
