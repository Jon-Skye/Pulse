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
        background: "#FFFFFF",
        foreground: "#2B2B2B",
        muted: "#F9F5F1",
        accent: "#774528",
        "accent-dark": "#4A2B20",
      },
      fontFamily: {
        serif: ["var(--font-lora)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Typography scale from design system
        "h1": ["48px", { lineHeight: "1.2", fontWeight: "600" }],
        "h2": ["36px", { lineHeight: "1.25", fontWeight: "600" }],
        "h3": ["28px", { lineHeight: "1.3", fontWeight: "500" }],
        "h4": ["20px", { lineHeight: "1.4", fontWeight: "700" }],
        "body-lg": ["20px", { lineHeight: "1.6", fontWeight: "400" }],
        "body": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        "caption": ["14px", { lineHeight: "1.4", fontWeight: "500", letterSpacing: "0.05em" }],
      },
      spacing: {
        // Editorial whitespace scale
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
      },
      maxWidth: {
        "content": "1280px",
        "article": "720px",
      },
    },
  },
  plugins: [],
};
export default config;
