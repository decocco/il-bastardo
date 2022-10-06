import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import AppLayout from "layouts/AppLayout";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { theme } from "theme";

import { GralContextProvider } from "components/context";

import "@fontsource/parisienne";
import "@fontsource/ubuntu";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <GralContextProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </GralContextProvider>
    </ChakraProvider>
  );
};

export default appWithTranslation(MyApp);
