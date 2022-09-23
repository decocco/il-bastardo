import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <Box bg="red">
      <Text>footer{t("language")}</Text>
      <div></div>
    </Box>
  );
};

export default Footer;
