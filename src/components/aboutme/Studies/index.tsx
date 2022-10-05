import React from "react";
import { Flex, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { fontsStyle } from "theme";

import { Career } from "./Career";
import studiesData from "./studiesData.json";

const { sectionTitle } = fontsStyle;

type CareerType = {
  dates: string;
  location: string;
  logo: string;
  title: string;
};

type Languages = "en" | "es";

export const Studies: React.FC = () => {
  const { t } = useTranslation("aboutme");
  const router = useRouter();

  const studies = studiesData[router.locale as Languages] as Array<CareerType>;

  return (
    <Flex direction="column" mt="40px" px="20px">
      <Text align="left" {...sectionTitle}>
        {t("academicBackground")}
      </Text>
      <Wrap justify="center" spacing="20px">
        {studies.map((career: CareerType) => (
          <WrapItem key={career.title}>
            <Career {...career} />
          </WrapItem>
        ))}
      </Wrap>
    </Flex>
  );
};
