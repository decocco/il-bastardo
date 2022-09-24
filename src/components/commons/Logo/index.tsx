import React from "react";
import { Flex, Text } from "@chakra-ui/react";

type Props = {
  ml?: string;
  mr?: string;
};

export const Logo: React.FC<Props> = ({ ml, mr }) => (
  <Flex
    bg="black"
    border="4px solid"
    borderColor="white"
    borderRadius="100px"
    minW="300px"
    ml={ml}
    mr={mr}
    px="10"
    transform="rotate(-7deg)"
  >
    <Text color="white" fontFamily="italic" fontSize="40px">
      Il Basterdo
    </Text>
  </Flex>
);
