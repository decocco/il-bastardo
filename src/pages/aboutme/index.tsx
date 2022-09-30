import { Box, Text } from "@chakra-ui/react";
import { defaultLocale } from "lib/constants";
import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const AboutMe: NextPage = () => {
  return (
    <Box>
      <Text>AboutMe</Text>
    </Box>
  );
};

export const getStaticProps = async ({ locale = defaultLocale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default AboutMe;
