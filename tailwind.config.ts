import type { Config } from "tailwindcss";

export default {
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
        "green-900": "#273533",
        "green-500": "#739B95",
        "green-200": "#96ACAA",
      },
      fontFamily: {
        bebasNeue: ["Bebas Neue", "sans-serif"]
      }
    },
  },
  plugins: [],
} satisfies Config;
