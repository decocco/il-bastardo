import { Flex } from "@chakra-ui/react";
import { defaultLocale } from "lib/constants";
import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import {
  Description,
  Studies,
  TechCarousel,
  WorkExperiences,
} from "components/aboutme";

const AboutMe: NextPage = () => {
  return (
    <Flex direction="column">
      <Description />
      <TechCarousel />
      <Flex direction="column">
        <Studies />
        <WorkExperiences />
      </Flex>
    </Flex>
  );
};

export async function getStaticProps({ locale = defaultLocale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default AboutMe;
