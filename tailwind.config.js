module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "2rem",
          sm: "2.25rem",
          lg: "2rem",
          xl: "4rem",
          "2xl": "6rem",
        },
      },
      colors: {
        body: "#353636",
        primary: {
          DEFAULT: "#3EA2D4",
          50: "#EFF7FB",
          100: "#e6f3f9",
        },
        secondary: {
          DEFAULT: "#404040",
        },
      },
      fontFamily: {
        sans: ["Gilroy", "sans-serif"],
      },
      boxShadow: {
        DEFAULT: "5px 5px 15px 0 rgba(0,0,0,0.1)",
      },
      borderRadius: {
        DEFAULT: "12px",
        "3xl": "100px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
