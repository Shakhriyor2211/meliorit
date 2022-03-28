module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        60: "240px",
        x: "270px",
        xm: "300px",
        s: "90px",
        "8xl": "1385px",
        "2md": "480px",
      },
      height: {
        82: "350px",
        85: "370px",
        95: "28.5rem",
        100: "30rem",
      },
    },
  },
  plugins: [],
};
