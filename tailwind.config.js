module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    minWidth: {
      14: "56px",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      Sea: "#00CCA9",
      Orange: "#FF9F39",
      Blue: "#466FBD",
      Crimson: "#BD467F",
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.gray.300", "currentColor"),
      Sea: "#00CCA9",
      Orange: "#FF9F39",
      Blue: "#466FBD",
      Crimson: "#BD467F",
    }),
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      borderColor: ["active"],
    },
  },
  plugins: [],
};
