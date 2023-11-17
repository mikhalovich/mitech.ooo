/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],

  theme: {
    fontFamily: {
      primary: ["Roboto Slab"],
      logo: ["Baumans"],
    },

    extend: {
      screens: {
        tablet: "768px",
        "max-tablet": { max: "768px" },
        laptop: "1024px",
        desktop: "1370px",

        "sticky-footer": { minHeight: "1000px", maxHeight: "1150px" },
      },

      maxWidth: {
        "services-card": "432px",
        medium: "440px",
        "index-heading": "456px",
        "2xlg": "664px",
        container: "1376px",
      },

      colors: {
        primary: "rgb(var(--color-primary) / 1)",
        secondary: "rgb(var(--color-secondary) / 1)",
        navigate: "rgb(var(--color-nav) / 1)",
        button: "rgb(var(--color-button) / 1)",
        warning: "rgb(var(--color-warning) / 1)",
        cultured: "rgb(var(--color-cultured) / 1)",
        greenCard: "rgb(var(--color-green) / 0.1)",
        purpleCard: "rgb(var(--color-purple) / 0.1)",
        pinkCard: "rgb(var(--color-pink) / 0.1)",
      },

      fontSize: {
        base: ["16px", "21px"],
        xlg: ["23px", "30px"],
        "3xlg": ["32px", "42px"],
        "4xlg": ["40px", "53px"],
        lg: ["56px", "64px"],
      },

      boxShadow: {
        normal: "2px 2px 15px 1px #00000029",
        buttonActive: "0px 0px 20px 8px #00000020",
      },
    },
  },
};
