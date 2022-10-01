import { extendTheme, ThemeConfig } from "@chakra-ui/react";

import { colors } from "./colors";
import { fonts, fontsStyle } from "./fonts";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
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
