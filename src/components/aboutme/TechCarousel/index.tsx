import React from "react";
import { Flex, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { fontsStyle } from "theme";

import { TechIndicator } from "./TechIndicator";
import techsData from "./techsData.json";

const { sectionTitle } = fontsStyle;

export const TechCarousel: React.FC = () => {
  const { t } = useTranslation("aboutme");
  return (
    <Flex direction="column" mt="40px" px="20px">
      <Text align="left" {...sectionTitle}>
        {t("technologies")}
      </Text>
      <Wrap direction="row" justify="center" mt="20px">
        {techsData.map(option => (
          <WrapItem key={`${option.name}-tech`}>
            <TechIndicator {...option} />
          </WrapItem>
        ))}
      </Wrap>
    </Flex>
  );
};
