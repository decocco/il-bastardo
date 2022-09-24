import { Flex } from "@chakra-ui/react";

import NavbarOption from "./NavbarOption";

const Navbar: React.FC = () => (
  <Flex alignItems="center" mr="auto">
    <NavbarOption path="aboutme" />
    <NavbarOption path="blog" />
    <NavbarOption isLast path="projects" />
  </Flex>
);

export default Navbar;
