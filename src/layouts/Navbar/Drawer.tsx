import {
  Drawer as ChakraDrawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import SocialNetworks from "layouts/Footer/SocialNetworks";
import { useRouter } from "next/router";
import { colors } from "theme";

import FlagWithLanguage from "./FlagWithLanguage";
import NavbarOptions from "./NavbarOptions";

const CloseButton = styled(DrawerCloseButton)`
  :focus {
    box-shadow: none;
  }
  :hover {
    background-color: unset;
    color: ${colors.darkPrimary};
    font-size: 16px;
  }
`;

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const Drawer: React.FC<Props> = ({ isOpen, onClose }) => {
  const router = useRouter();

  const selectLanguage = (language: string) => () => {
    if (router.locale === language) return;
    router.push(
      {
        pathname: router.pathname,
        query: router.query,
      },
      undefined,
      { locale: language }
    );
  };

  return (
    <ChakraDrawer isOpen={isOpen} onClose={onClose} placement="right">
      <DrawerOverlay />
      <DrawerContent p="0px 40px 30px 40px">
        <CloseButton top="3" />
        <DrawerHeader
          borderBottomWidth="1px"
          color="black"
          mb="20px"
          textAlign="center"
        >
          Menu
        </DrawerHeader>
        <NavbarOptions isInDrawer onClose={onClose} />
        <Flex direction="column" my="auto">
          <Flex
            cursor="pointer"
            justify="center"
            my="15px"
            onClick={selectLanguage("en")}
          >
            <FlagWithLanguage isEnglish />
          </Flex>
          <Flex
            cursor="pointer"
            justify="center"
            my="15px"
            onClick={selectLanguage("es")}
          >
            <FlagWithLanguage isEnglish={false} />
          </Flex>
        </Flex>
        <Flex>
          <SocialNetworks
            isInDrawer
            onMailOpen={() => {
              return;
            }}
          />
        </Flex>
      </DrawerContent>
    </ChakraDrawer>
  );
};

export default Drawer;
