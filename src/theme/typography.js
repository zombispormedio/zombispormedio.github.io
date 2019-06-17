import Typography from "typography";
import variables from "./variables";

const { colorBackground } = variables;

const typography = new Typography({
  bodyFontFamily: ["Camphor", "Open Sans", "Segoe UI", "sans-serif"],
  overrideThemeStyles: () => ({
    html: {
      overflowY: "auto"
    },
    body: {
      backgroundColor: colorBackground
    },
    "ul,ol": {
      listStyle: "none",
      marginBottom: "inherit"
    },
    li: {
      marginBottom: "inherit"
    },
    a: {
      color: "inherit" /* blue colors for links too */,
      textDecoration: "inherit" /* no underline */
    }
  })
});

export default typography;
