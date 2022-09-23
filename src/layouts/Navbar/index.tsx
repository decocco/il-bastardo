import { Box, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

const Navbar: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <Box bg="red">
      <Text>navbar{t("language")}</Text>
    </Box>
  );
};

export default Navbar;
