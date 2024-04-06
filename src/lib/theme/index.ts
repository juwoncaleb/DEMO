import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      primary: "#054738",
    },
    text: {
      light: "#FFFCF8",
    },
  },
  fonts: {
    body: "CabinetGroteskMedium,  sans-serif",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
});

export default theme;
