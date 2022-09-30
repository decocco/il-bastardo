import { Box, Text } from "@chakra-ui/react";
import { defaultLocale } from "lib/constants";
import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home: NextPage = () => {
  return (
    <Box>
      <Text>Home</Text>
    </Box>
  );
};

export const getStaticProps = async ({ locale = defaultLocale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
export default Home;
