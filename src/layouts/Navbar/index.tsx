import { Flex } from "@chakra-ui/react";
import { Logo } from "components/commons/Logo";

import LanguageSelector from "./LanguageSelector";
import NavbarOptions from "./NavbarOptions";

const Navbar: React.FC = () => {
  return (
    <Flex
      bg="black"
      direction="row"
      fontFamily="ubuntu"
      fontSize="20px"
      px="100"
      py="5"
    >
      <Logo mr="auto" />
      <NavbarOptions />
      <LanguageSelector />
    </Flex>
  );
};

export default Navbar;
