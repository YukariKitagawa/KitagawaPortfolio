import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main_color: "#F6E7E0",
        sub_color: "#7D6C70",
        accent_color: "#B78791",
        bg_color1: "#FFF4F0",
        bg_color2: "#E8DDDC",
        marker_color: "#e5bec6",
      },
    },
  },
  plugins: [],
} satisfies Config;
