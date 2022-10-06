import React, { useRef } from "react";
import { Flex, Show } from "@chakra-ui/react";

import { ContactModal } from "components/commons/ContactModal";
import { Logo } from "components/commons/Logo";
import { useGralContext } from "components/context";

import SocialNetworks from "./SocialNetworks";

const Footer: React.FC = () => {
  const initialRef = useRef(null);
  const { isOpenContactModal, onCloseContactModal, onOpenContactModal } =
    useGralContext();
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
          <SocialNetworks onMailOpen={onOpenContactModal} />
        </Show>

        <Logo ml="auto" />
      </Flex>
      <ContactModal
        initialRef={initialRef}
        isOpen={isOpenContactModal}
        onClose={onCloseContactModal}
      />
    </>
  );
};

export default Footer;
