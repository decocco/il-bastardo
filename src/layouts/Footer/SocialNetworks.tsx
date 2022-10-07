import React from "react";
import { SocialIcon } from "react-social-icons";
import { Flex } from "@chakra-ui/react";
import { colors } from "theme";

type Props = {
  isInDrawer?: boolean;
  onMailOpen: () => void;
};

const SocialNetworks: React.FC<Props> = ({
  isInDrawer = false,
  onMailOpen,
}) => {
  const bgColor = isInDrawer ? colors.black : colors.white;
  return (
    <Flex justify="space-between" w="230px">
      <SocialIcon
        bgColor={bgColor}
        url="https://linkedin.com/in/jeremy-galarce-urbina-96590114b"
      />
      <SocialIcon bgColor={bgColor} url="https://github.com/decocco" />
      <SocialIcon
        bgColor={bgColor}
        url="https://www.instagram.com/decocco.js/"
      />
      <SocialIcon
        bgColor={bgColor}
        network="email"
        onClick={onMailOpen}
        style={{ cursor: "pointer" }}
      />
    </Flex>
  );
};

export default SocialNetworks;
