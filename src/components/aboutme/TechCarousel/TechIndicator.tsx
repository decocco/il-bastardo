import React from "react";
import { Flex, Image, useDisclosure } from "@chakra-ui/react";

import { TechModal } from "./TechModal";

type Props = {
  grade: number;
  logo: string;
  name: string;
};

export const TechIndicator: React.FC<Props> = ({ grade, logo, name }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex direction="row" justify="center" m="15px" minW="180px">
      <Image alt="name" height="100px" onClick={onOpen} src={logo} />
      <TechModal
        grade={grade}
        isOpen={isOpen}
        logo={logo}
        name={name}
        onClose={onClose}
      />
    </Flex>
  );
};
