/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,ts}"],
    daisyui: {
      themes: [
        {
          mytheme: {
            primary: "#8D171A",
            secondary: "#92949C",
            accent: "#91d4ea",
            neutral: "#272A34",
            "base-100": "#f3f4f6",
            info: "#7EC6F7",
            success: "#2AA777",
            warning: "#FB9518",
            error: "#F9231F",
          },
        },
      ],
    },
    plugins: [
      require("@tailwindcss/forms"),
      require("@tailwindcss/typography"),
      require("daisyui"),
      require("prettier-plugin-tailwindcss"),
    ],
  };
  