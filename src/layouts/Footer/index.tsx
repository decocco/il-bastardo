import React from "react";
import { Flex } from "@chakra-ui/react";
import { SocialIcon } from "react-social-icons";
import { Logo } from "components/commons/Logo";
import { colors } from "theme";

const Footer: React.FC = () => {
  return (
    <Flex
      bg="black"
      color="white"
      direction="row"
      fontFamily="ubuntu"
      fontSize="20px"
      px="100"
      py="5"
    >
      <SocialIcon
        bgColor={colors.white}
        url="https://linkedin.com/in/jeremy-galarce-urbina-96590114b"
      />
      <SocialIcon bgColor={colors.white} url="https://github.com/decocco" />
      <SocialIcon
        bgColor={colors.white}
        url="https://www.instagram.com/decocco.js/"
      />

      <Logo ml="auto" />
    </Flex>
  );
};

export default Footer;
