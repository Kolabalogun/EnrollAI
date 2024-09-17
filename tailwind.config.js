/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundColor: {
        primary: "#f9fafb",
        secondary: "#b076e7",
        fadesecondary: "#e3d9fe",
      },
      colors: {
        primary: "#ffffff",
        secondary: "#b076e7",
        tertiary: "#101828",
        teal: "#1e9191",
        fade: "#98a2b3",

        red: {
          500: "#FB0000",
        },

        dark: {
          200: "#1E1E1E",
          300: "#131619",
          400: "#1A1D21",
          500: "#363A3D",
          600: "#76828D",
          700: "#ABB8C4",
        },

        text: {
          primary: "#757575",
          secondary: "#303030",
        },
        green: "#14AE5C",
        blue: "#007AFF",
      },

      borderColor: {
        fade: "#d9d9d9",
        fade2: "#929bac",
        secondary: "#a66fd7",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
