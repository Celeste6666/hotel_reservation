import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        '3xl': '0 0px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: [
      {
        hotel: {
          primary: "#EEC41E",
          secondary: "#2f4f4f",
          accent: "#1dcdbc",
          neutral: "#2b3440",
          "base-100": "#ffffff",
          info: "#15486d",
          success: "#2f4f4f",
          warning: "#cd5a35",
          error: "#f46a6a",
        },
      },
    ], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
};
export default config;
