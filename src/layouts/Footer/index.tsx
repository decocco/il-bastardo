import React, { useRef } from "react";
import { Flex, Show, useDisclosure } from "@chakra-ui/react";

import { ContactModal } from "components/commons/ContactModal";
import { Logo } from "components/commons/Logo";

import SocialNetworks from "./SocialNetworks";

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
        px={{ base: "3vw", sm: "7vw" }}
        py="5"
      >
        <Show breakpoint="(min-width: 1024px)">
          <SocialNetworks onMailOpen={onOpen} />
        </Show>

        <Logo ml="auto" />
      </Flex>
      <ContactModal initialRef={initialRef} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Footer;
