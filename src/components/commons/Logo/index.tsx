import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

type Props = {
  ml?: string;
  mr?: string;
};

export const Logo: React.FC<Props> = ({ ml, mr }) => {
  const router = useRouter();
  return (
    <Flex
      bg="black"
      border="4px solid"
      borderColor="white"
      borderRadius="100px"
      cursor="pointer"
      minW="300px"
      ml={ml}
      mr={mr}
      onClick={() => router.push("/")}
      px="10"
      transform="rotate(-7deg)"
    >
      <Text color="white" fontFamily="italic" fontSize="40px">
        Il Basterdo
      </Text>
    </Flex>
  );
};
