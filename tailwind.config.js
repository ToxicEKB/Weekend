module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Montserrat", "ui-sans-serif", "system-ui"],
    },
    minWidth: {
      14: "60px",
    },
    textColor: (theme) => ({
      ...theme("colors"),
      Sea: "#00CCA9",
      Orange: "#FF9F39",
      Blue: "#466FBD",
      Crimson: "#BD467F",
    }),
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
      "2xl": "1rem",
      full: "9999px",
      "10px": "10px",
    },
    boxShadow: {
      drop: "0 4px 4px rgba(0, 0, 0, 0.25)",
    },
  },
  variants: {
    extend: {
      textColor: ["active"],
      backgroundColor: ["active"],
      borderColor: ["active"],
      borderRadius: ["hover", "focus"],
    },
  },
  plugins: [],
};
