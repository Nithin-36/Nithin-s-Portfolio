/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#f7f2e8",
        ink: "#121317",
        slate: "#5f6370",
        line: "#e6ddcf",
        accent: "#e46f47",
        pine: "#1d4a3d",
        sun: "#d7a13f",
        shell: "#fffaf4",
      },
      boxShadow: {
        panel: "0 24px 60px rgba(18, 19, 23, 0.10)",
        float: "0 35px 90px rgba(18, 19, 23, 0.18)",
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Manrope", "sans-serif"],
      },
      backgroundImage: {
        hero:
          "radial-gradient(circle at top left, rgba(228,111,71,0.20), transparent 30%), radial-gradient(circle at 85% 10%, rgba(29,74,61,0.16), transparent 24%), linear-gradient(180deg, rgba(255,250,244,0.92), rgba(247,242,232,1))",
      },
    },
  },
  plugins: [],
};
