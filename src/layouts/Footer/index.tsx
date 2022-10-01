import React, { useRef } from "react";
import { SocialIcon } from "react-social-icons";
import { Flex, useDisclosure } from "@chakra-ui/react";
import { colors } from "theme";

import { ContactModal } from "components/commons/ContactModal";
import { Logo } from "components/commons/Logo";

const Footer: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);

  return (
    <>
      <Flex
        alignItems="center"
        bg="black"
        color="white"
        direction="row"
        fontFamily="ubuntu"
        fontSize="20px"
        px="7vw"
        py="5"
      >
        <Flex justify="space-between" w="230px">
          <SocialIcon
            bgColor={colors.white}
            url="https://linkedin.com/in/jeremy-galarce-urbina-96590114b"
          />
          <SocialIcon bgColor={colors.white} url="https://github.com/decocco" />
          <SocialIcon
            bgColor={colors.white}
            url="https://www.instagram.com/decocco.js/"
          />
          <SocialIcon
            bgColor={colors.white}
            network="email"
            onClick={onOpen}
            style={{ cursor: "pointer" }}
          />
        </Flex>
        <Logo ml="auto" />
      </Flex>
      <ContactModal initialRef={initialRef} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Footer;
