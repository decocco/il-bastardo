import { HamburgerIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Show, useDisclosure } from "@chakra-ui/react";
import styled from "@emotion/styled";

import { Logo } from "components/commons/Logo";

import Drawer from "./Drawer";
import LanguageSelector from "./LanguageSelector";
import NavbarOptions from "./NavbarOptions";

const BurgerIcon = styled(IconButton)`
  align-self: center;
  font-size: 20px;
  :focus {
    box-shadow: none;
  }
`;

const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      bg="black"
      direction="row"
      fontFamily="ubuntu"
      fontSize="20px"
      px={{ base: "3vw", sm: "7vw" }}
      py="5"
    >
      <Logo mr="auto" />
      <Show breakpoint="(max-width: 1023px)">
        <BurgerIcon
          aria-label="BurgerIcon"
          bg="white"
          icon={<HamburgerIcon color="black" />}
          onClick={onOpen}
        />
      </Show>
      <Show breakpoint="(min-width: 1024px)">
        <NavbarOptions />
        <LanguageSelector />
      </Show>
      <Drawer isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default Navbar;
