import React from "react";
import { Flex, Image as ChakraImage, Text } from "@chakra-ui/react";
import { fontsStyle } from "theme";

const { centeredTitle, descriptiveText } = fontsStyle;

export const Description: React.FC = () => {
  return (
    <Flex direction="row">
      <Flex alignItems="center" justify="center" mx="15px" w="100%">
        <Flex
          border="2px solid"
          borderColor="primary"
          borderRadius="40px"
          minW="300px"
          overflow="hidden"
        >
          <ChakraImage
            alt="myslef"
            height="300px"
            src="/assets/myself.jpeg"
            width="300px"
          />
        </Flex>
      </Flex>

      <Flex alignSelf="center" direction="column" h="100%" mx="15px">
        <Text align="center" mb="16px" {...centeredTitle}>
          Jeremy Galarce Urbina
        </Text>
        <Text align="justify" {...descriptiveText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
        </Text>
      </Flex>
    </Flex>
  );
};
