import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      main: {
        50: "#f1f4fd",
        100: "#dfe7fa",
        200: "#c6d5f7",
        300: "#9fbbf1",
        400: "#7297e8",
        500: "#5173e0",
        600: "#3c57d4",
        700: "#3344c2",
        800: "#2f3a9e",
        900: "#2e3988",
        950: "#1e234d",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Saira", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
