import React from "react";
import {
  Flex,
  Image as ChakraImage,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { fontsStyle } from "theme";

const { sectionTitle, descriptiveText } = fontsStyle;

export const Description: React.FC = () => {
  return (
    <Wrap justify="center" mt="20px">
      <WrapItem minW={{ base: "280", sm: "300px" }}>
        <Flex
          border="2px solid"
          borderColor="primary"
          borderRadius="40px"
          mx="2vw"
          overflow="hidden"
        >
          <ChakraImage
            alt="myslef"
            height={{ base: "280", sm: "300px" }}
            src="/assets/aboutme/myself.jpeg"
            width={{ base: "280", sm: "300px" }}
          />
        </Flex>
      </WrapItem>
      <WrapItem w={[300, 400, 500, 800]}>
        <Flex alignSelf="center" direction="column" h="100%" mx="2vw">
          <Text align="center" mb="16px" {...sectionTitle}>
            Jeremy Galarce Urbina
          </Text>
          <Text align="justify" {...descriptiveText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and
          </Text>
        </Flex>
      </WrapItem>
    </Wrap>
  );
};
