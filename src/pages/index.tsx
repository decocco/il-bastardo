import { Box, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { defaultLocale } from "lib/constants";

const Home: NextPage = () => {
  return (
    <Box h="2000px">
      <Text>body</Text>
    </Box>
  );
};

export async function getStaticProps({ locale = defaultLocale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default Home;
