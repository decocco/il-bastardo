import { extendTheme, ThemeConfig } from "@chakra-ui/react";

import { colors } from "./colors";
import { fonts, fontsStyle } from "./fonts";

const breakpoints = {
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
};

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  breakpoints,
  config,
  colors,
  fonts,
  styles: {
    global: {
      body: {
        fontFamily: "ubuntu",
      },
    },
  },
});

export { colors, fonts, fontsStyle, theme };
