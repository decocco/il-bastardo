import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { colors } from "./colors";
import { fonts } from "./fonts";

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

export { theme, colors, fonts };
