import React, { useRef } from "react";
import { SocialIcon } from "react-social-icons";
import { Flex, Text, useDisclosure } from "@chakra-ui/react";
import { colors } from "theme";

import { ContactModal } from "components/commons/ContactModal";
import { Logo } from "components/commons/Logo";
import { useWindowSize } from "components/hooks";

const Footer: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { width } = useWindowSize();
  const initialRef = useRef(null);
  if (!width) return <Flex>asd</Flex>;

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
        {width < 1024 ? (
          <Text>footer</Text>
        ) : (
          <Flex justify="space-between" w="230px">
            <SocialIcon
              bgColor={colors.white}
              url="https://linkedin.com/in/jeremy-galarce-urbina-96590114b"
            />
            <SocialIcon
              bgColor={colors.white}
              url="https://github.com/decocco"
            />
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
        )}
        <Logo ml="auto" />
      </Flex>
      <ContactModal initialRef={initialRef} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Footer;
