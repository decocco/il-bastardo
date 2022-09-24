import { ChakraProvider } from "@chakra-ui/react";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import "@fontsource/parisienne";
import "@fontsource/ubuntu";

import AppLayout from "layouts/AppLayout";
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
