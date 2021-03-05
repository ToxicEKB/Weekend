module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Montserrat", "ui-sans-serif", "system-ui"],
    },
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
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      "10px": "10px",
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      borderColor: ["active"],
      borderRadius: ["hover", "focus"],
    },
  },
  plugins: [],
};
