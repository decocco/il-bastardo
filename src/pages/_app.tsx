import "@fontsource/parisienne";
import "@fontsource/ubuntu";

import { ChakraProvider } from "@chakra-ui/react";
import AppLayout from "layouts/AppLayout";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { theme } from "theme";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ChakraProvider>
  );
};

export default appWithTranslation(MyApp);
