/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#fafbfc",
          "200": "#919191",
          "300": "#8a8a8a",
          "400": "#868686",
          "500": "#7f7f7f",
          "600": "#767676",
          "700": "rgba(144, 144, 144, 0.4)",
        },
        dimgray: {
          "100": "#747474",
          "200": "#747373",
          "300": "#666",
          "400": "#5f5f5f",
          "500": "#4c535f",
          "600": "#4d4d4d",
          "700": "rgba(116, 116, 116, 0.6)",
          "800": "rgba(116, 116, 116, 0.8)",
        },
        silver: "#c7c7c7",
        gainsboro: {
          "100": "#e0e4ec",
          "200": "#ddd",
          "300": "#dcdcdc",
          "400": "#dcd9d9",
        },
        whitesmoke: {
          "100": "#f7f7fa",
          "200": "#f3f3f7",
        },
        tomato: {
          "100": "#f76b56",
          "200": "#f4683c",
          "300": "#eb5231",
          "400": "#fc4141",
        },
        forestgreen: {
          "100": "#42bb4e",
          "200": "#41b64d",
        },
        darkgray: {
          "100": "#ababab",
          "200": "#a9a9a9",
          "300": "#a7a7a7",
          "400": "#a0a0a0",
          "500": "#9a9a9a",
        },
        lightgray: {
          "100": "#d5d5d5",
          "200": "#d1d1d1",
          "300": "#ccc",
        },
        purple: "#8a317c",
        "blue-blue": "#0071e3",
        black: "#000",
        slateblue: "#4e3eb3",
        darkslategray: {
          "100": "#474747",
          "200": "#333",
        },
        mediumslateblue: "#926cff",
        coral: {
          "100": "#fa7c54",
          "200": "#f27851",
        },
        lightslategray: "#8d98aa",
        slategray: "#717b8c",
        burlywood: "#ffc196",
        crimson: "#f23d3d",
        sandybrown: "#f09643",
        palevioletred: "#ec6c9a",
        blueviolet: "#6e23cd",
        lightgreen: "#57cf63",
        salmon: "#ef8361",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        abel: "Abel",
        lato: "Lato",
        "open-sans": "'Open Sans'",
        sarabun: "Sarabun",
        manrope: "Manrope",
      },
      borderRadius: {
        "3xs": "10px",
        "12xs": "1px",
        "11xl": "30px",
        "14xl": "33px",
        "21xl": "40px",
        "8xs": "5px",
        mini: "15px",
      },
    },
    fontSize: {
      mini: "15px",
      xl: "20px",
      "3xs": "10px",
      "6xl": "25px",
      "16xl": "35px",
      xs: "12px",
      base: "16px",
      "31xl": "50px",
      sm: "14px",
      "9xl": "28px",
      lg: "18px",
      "13xl": "32px",
      smi: "13px",
      "2xs": "11px",
      "xs-2": "11.2px",
      "3xl": "22px",
      "smi-8": "12.8px",
      "2xs-5": "10.5px",
      "2xs-8": "10.8px",
      "2xs-9": "10.9px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
