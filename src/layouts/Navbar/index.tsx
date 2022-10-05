import { Flex, Text } from "@chakra-ui/react";

import { Logo } from "components/commons/Logo";
import { useWindowSize } from "components/hooks";

import LanguageSelector from "./LanguageSelector";
import NavbarOptions from "./NavbarOptions";

const Navbar: React.FC = () => {
  const { width } = useWindowSize();
  if (!width) return <Flex>asd</Flex>;
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
      {width < 1024 ? (
        <Text>Navbar</Text>
      ) : (
        <>
          <NavbarOptions />
          <LanguageSelector />
        </>
      )}
    </Flex>
  );
};

export default Navbar;
