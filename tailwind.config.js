const plugin = require("tailwindcss/plugin");

const headingStyles = {
  ".text-h1": {
    fontSize: "22px",
    lineHeight: "24px",
    "@media (min-width: 768px)": {
      fontSize: "36px",
      lineHeight: "38px",
    },
    "@media (min-width: 1280px)": {
      fontSize: "44px",
      lineHeight: "46px",
    },
  },
  ".text-h2": {
    fontSize: "21px",
    lineHeight: "23px",
    "@media (min-width: 768px)": {
      fontSize: "32px",
      lineHeight: "34px",
    },
    "@media (min-width: 1280px)": {
      fontSize: "40px",
      lineHeight: "42px",
    },
  },
  ".text-h3": {
    fontSize: "20px",
    lineHeight: "22px",
    "@media (min-width: 768px)": {
      fontSize: "28px",
      lineHeight: "30px",
    },
    "@media (min-width: 1280px)": {
      fontSize: "36px",
      lineHeight: "38px",
    },
  },
  ".text-h4": {
    fontSize: "19px",
    lineHeight: "21px",
    "@media (min-width: 768px)": {
      fontSize: "24px",
      lineHeight: "26px",
    },
    "@media (min-width: 1280px)": {
      fontSize: "27px",
      lineHeight: "29px",
    },
  },
  ".text-h5": {
    fontSize: "18px",
    lineHeight: "20px",
    "@media (min-width: 768px)": {
      fontSize: "20px",
      lineHeight: "22px",
    },
    "@media (min-width: 1280px)": {
      fontSize: "20px",
      lineHeight: "22px",
    },
  },
  ".text-h6": {
    fontSize: "14px",
    lineHeight: "16px",
    "@media (min-width: 768px)": {
      fontSize: "16px",
      lineHeight: "18px",
    },
    "@media (min-width: 1280px)": {
      fontSize: "18px",
      lineHeight: "20px",
    },
  },
  ".p-default": {
    fontSize: "14px",
    lineHeight: "17px",
    "@media (min-width: 768px)": {
      fontSize: "16px",
      lineHeight: "19px",
    },
    "@media (min-width: 1280px)": {
      fontSize: "18px",
      lineHeight: "23px",
    },
  },
  ".p-small": {
    fontSize: "14px",
    lineHeight: "16px",
    "@media (min-width: 768px)": {
      fontSize: "14px",
      lineHeight: "16px",
    },
    "@media (min-width: 1280px)": {
      fontSize: "16px",
      lineHeight: "18px",
    },
  },
  ".p-tertiary": {
    fontSize: "18px",
    lineHeight: "20px",
    "@media (min-width: 768px)": {
      fontSize: "20px",
      lineHeight: "22px",
    },
    "@media (min-width: 1280px)": {
      fontSize: "26px",
      lineHeight: "28px",
    },
  },
  ".p-secondary": {
    fontSize: "20px",
    lineHeight: "22px",
    "@media (min-width: 768px)": {
      fontSize: "22px",
      lineHeight: "24px",
    },
    "@media (min-width: 1280px)": {
      fontSize: "28px",
      lineHeight: "30px",
    },
  },
  ".p-primary": {
    fontSize: "20px",
    lineHeight: "22px",
    "@media (min-width: 768px)": {
      fontSize: "24px",
      lineHeight: "26px",
    },
    "@media (min-width: 1280px)": {
      fontSize: "30px",
      lineHeight: "32px",
    },
  },
  ".button-outline": {
    fontSize: "14px",
    lineHeight: "normal",
    background: "transparent",
    border: "1px solid #2c2c2c",
    borderRadius: "2px",
    letterSpacing: "0.046875em;",
    transition: "background-color 0.3s ease, color 0.3s ease",
    "@media (min-width: 768px)": {
      fontSize: "14px",
      lineHeight: "normal",
      background: "transparent",
      border: "1px solid #2c2c2c",
      borderRadius: "2px",
      letterSpacing: "0.046875em;",
      transition: "background-color 0.3s ease, color 0.3s ease",
    },
    "@media (min-width: 1280px)": {
      fontSize: "14px",
      lineHeight: "normal",
      background: "transparent",
      border: "1px solid #2c2c2c",
      borderRadius: "2px",
      letterSpacing: "0.046875em;",
      transition: "background-color 0.3s ease, color 0.3s ease",
    },
  },
  ".button-primary": {
    fontSize: "14px",
    lineHeight: "normal",
    background: "#162cb9",
    fontWeight: "700",
    textTransform: "uppercase",
    color: "#fff",
    padding: "15px 32px",
    border: "1px solid #2c2c2c",
    borderRadius: "10px",
    cursor: "pointer",
    letterSpacing: "0.046875em;",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#000000",
      color: "#fff",
    },
    "@media (min-width: 768px)": {
      fontSize: "14px",
      lineHeight: "normal",
      background: "#162cb9",
      fontWeight: "700",
      textTransform: "uppercase",
      color: "#fff",
      padding: "15px 32px",
      border: "1px solid #2c2c2c",
      borderRadius: "10px",
      cursor: "pointer",
      letterSpacing: "0.046875em;",
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: "#000000",
        color: "#fff",
      },
    },
    "@media (min-width: 1280px)": {
      fontSize: "14px",
      lineHeight: "normal",
      background: "#162cb9",
      fontWeight: "700",
      textTransform: "uppercase",
      color: "#fff",
      padding: "15px 32px",
      border: "1px solid #2c2c2c",
      borderRadius: "10px",
      cursor: "pointer",
      letterSpacing: "0.046875em;",
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: "#000000",
        color: "#fff",
      },
    },
  },

};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/components/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/lib/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    borderRadius: {
      full: "9999px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"],
        heading: ["var(--font-montserrat)", "sans-serif"],
      },
      colors: {
        primary: "#48179C",   // Blue
        secondary: "#F65A75", // Orange
      },
      animation: {
      "marquee-scroll": "marquee-scroll 12s linear infinite",
    },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities(headingStyles);
    }),
  ],
};
