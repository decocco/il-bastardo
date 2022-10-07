import { Flex } from "@chakra-ui/react";

import NavbarOption from "./NavbarOption";

type Props = {
  isInDrawer?: boolean;
  onClose?: () => void;
};

const NavbarOptions: React.FC<Props> = ({
  isInDrawer = false,
  onClose = () => {
    return;
  },
}) => (
  <Flex
    alignItems="center"
    direction={isInDrawer ? "column" : "row"}
    mr={isInDrawer ? "unset" : "auto"}
  >
    <NavbarOption isInDrawer={isInDrawer} onClose={onClose} path="aboutme" />
    <NavbarOption isInDrawer={isInDrawer} onClose={onClose} path="blog" />
    <NavbarOption
      isLast
      isInDrawer={isInDrawer}
      onClose={onClose}
      path="projects"
    />
  </Flex>
);

export default NavbarOptions;
