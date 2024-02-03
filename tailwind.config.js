import { nextui } from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */
 const config = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
     "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
   },
  darkMode: "class",
 plugins: [
  nextui({
    prefix: "nextui", // prefix for themes variables
    addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
    defaultTheme: "dark", // default theme from the themes object
    defaultExtendTheme: "dark", // default theme to extend on custom themes
    layout: {}, // common layout tokens (applied to all themes)
    themes: {
      light: {
        layout: {
          // Customize light theme layout tokens here
          backgroundColor: "#2F2E41",
          textColor: "#DDAF37",
          // Add more layout properties as needed
        },
        colors: {
          // Customize light theme colors here
          primary: "#3498db",
          secondary: "#2ecc71",
          // Add more color properties as needed
        },
      },
      dark: {
        layout: {
          // Customize dark theme layout tokens here
          backgroundColor: "#1a1a1a",
          textColor: "#ffffff",
          // Add more layout properties as needed
        },
        colors: {
          // Customize dark theme colors here
          primary: "#3498db",
          secondary: "#2ecc71",
          // Add more color properties as needed
        },
      },
      // ... custom themes
    },
  }),
],
 }


export default config;