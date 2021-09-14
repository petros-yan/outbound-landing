const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    screens: {
      xs: "0",
      ...defaultTheme.screens,
    },
    fontFamily: {
      sans: "Roboto",
      serif: "Roboto",
      mono: "Roboto",
      display: "Roboto",
      body: "Roboto",
    },
    fontSize: {
      50: ["3.125rem", "52px"],
      40: ["2.5rem", "61px"],
      36: ["2.25rem", "42px"],
      32: ["2rem", "37px"],
      30: ["1.875rem", "40px"],
      26: ["1.625rem", "30px"],
      24: ["1.5rem", "36px"],
      20: ["1.25rem", "23px"],
      18: ["1.125rem", "21px"],
      17: ["1.063rem", "25px"],
      16: ["1rem", "19px"],
      15: [".938rem", "18px"],
      14: [".875rem", "16px"],
    },
    spacing: {
      // grid units - 5x
      0: "0",
      0.5: "2.5px",
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "30px",
      7: "35px",
      8: "40px",
      9: "45px",
      10: "50px",
      11: "55px",
      12: "60px",
      13: "65px",
      14: "70px",
      16: "80px",
      18: "90px",
      19: "95px",
      20: "100px",
      21: "105px",
      22: "110px",
      23: "115px",
      24: "120px",
      25: "125px",
      28: "140px",
      29: "145px",
      30: "150px",
      31: "155px",
      40: "200px",
      47: "235px",
      106: "530px",
      108: "540px",
      //none grid units
      "0.5px": "0.5px",
      px: "1px",
      "8px": "8px",
      "6px": "6px",
      "12px": "12px",
      "13px": "13px",
      "17px": "17px",
      "22px": "22px",
      "23px": "23px",
      "28px": "28px",
      "32px": "32px",
      "33px": "33px",
      "38px": "38px",
      "42px": "42px",
      "46px": "46px",
      "48px": "48px",
      "53px": "53px",
      "65px": "65px",
      "78px": "78px",
      "82px": "82px",
      "270px": "270px",
      "285px": "285px",
      "328px": "328px",
      "335px": "335px",
      "385px": "385px",
      "405px": "405px",
      "444px": "444px",
      "580px": "580px",
      "635px": "635px",
      "895px": "895px",
      "1275px": "1275px",
      "50%": "50%",
      "100vh": "100vh",
      "100vh-50": "calc(100vh - 50px)",
    },
    colors: {
      red: {
        500: "#FF3838",
      },
      pink: {
        700: "#C2185B",
        500: "#E91E63",
        100: "#F8BBD0",
        50: "#FCE4EC",
      },
      indigo: {
        700: "#303F9F",
        500: "#3F51B5",
        100: "#C5CAE9",
        50: "#E8EAF6",
      },
      blue: {
        700: "#1C66DD",
        500: "#2196F3",
        100: "#BBDEFB",
        50: "#E3F2FD",
      },
      green: {
        700: "#689F38",
        500: "#8BC34A",
        100: "#DCEDC8",
        50: "#F1F8E9",
      },
      yellow: {
        700: "#FFA000",
        500: "#FFC107",
        100: "#FFECB3",
        50: "#FFF8E1",
      },
      light: {
        DEFAULT: "#E8EFF5",
        alpha: "#E8E7F6",
      },
      dark: {
        DEFAULT: "#1D1C3C",
        500: "#13142D",
        100: "#13142c",
        50: "#191833",
      },
      black: {
        DEFAULT: "rgb(0,0,0)",
        75: "rgba(0,0,0,0.75)",
        50: "rgba(0,0,0,0.50)",
        25: "rgba(0,0,0,0.25)",
      },
      white: {
        DEFAULT: "rgb(255,255,255)",
        75: "rgba(255,255,255,0.75)",
        50: "rgba(255,255,255,0.50)",
        25: "rgba(255,255,255,0.25)",
      },
      gray: {
        DEFAULT: "#F2F3FA",
        placeholder: "#767676",
        alpha: "#E5E5E5",
        beta: "#F2F3FA",
      },
      frame: {
        DEFAULT: "#F2F2F2",
        alpha: "#DEDEDE",
      },
      info: {
        50: "#FFF3E0",
        100: "#FF9800",
      },
      // old colors
      primary: {
        light: "#8e82f5",
        DEFAULT: "#1D1C3C",
        dark: "#554e93",
      },
      secondary: {
        light: "#f74197",
        DEFAULT: "#de3b88",
        dark: "#c63479",
      },
      danger: {
        light: "#E57373",
        DEFAULT: "#F44336",
        dark: "#C62828",
      },

      transparent: "transparent",
    },
    backgroundImage: {
      // "dark-gradient": "linear-gradient(90deg, #16152D 0%, #1D1C3C 100%)",
      "blue-gradient": "linear-gradient(104.13deg, #323D87 0%, #1D1C3C 100%)",
      "light-blue-gradient":
        "linear-gradient(142.82deg, #3F51B5 -31.39%, #1D1C3C 60.03%)",
      "pink-gradient":
        "linear-gradient(142.82deg, rgba(233, 30, 99, 0.67) -31.39%, #13142C 60.03%)",
    },
    extend: {
      screens: { "3xl": "1435px", "4xl": "1921px" },
      borderWidth: {
        0.5: "0.5px",
        1: "1px",
        3: "3px",
        5: "5px",
      },
      borderRadius: {
        2: "2px",
        4: "4px",
        5: "5px",
        40: "40px",
        100: "100px",
      },
      minWidth: {
        230: "230px",
      },
      maxWidth: {
        480: "480px",
        530: "530px",
        580: "580px",
      },
      minHeight: {
        250: "250px",
        270: "270px",
      },
      maxHeight: {
        351: "351px",
      },
      zIndex: {
        "-1": "-1",
        mega: 9999,
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      borderWidth: ["focus"],
      fontStyle: ["focus"],
      visibility: ["group-hover"],
      cursor: ["hover"],
      opacity: ["active"],
      backgroundColor: ["active", "disabled"],
      textColor: ["disabled"],
      display: ["group-hover"],
      borderColor: ["disabled"],
      boxShadow: ["disabled"],
      padding: ["hover"],
      borderRadius: ["first", "last"],
      borderWidth: ["first", "last"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
