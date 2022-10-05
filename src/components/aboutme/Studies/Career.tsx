import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import { fontsStyle } from "theme";

const { descriptiveText, minorText } = fontsStyle;

type Props = {
  dates: string;
  location: string;
  logo: string;
  title: string;
};

export const Career: React.FC<Props> = ({ dates, location, logo, title }) => (
  <Flex
    alignItems="center"
    border="1px solid"
    borderColor="black"
    borderRadius={16}
    direction="row"
    h="100%"
    justify="center"
    m="15px"
    minW="500px"
    p="10px"
    w="500px"
  >
    <Image alt="name" height="100px" src={logo} />
    <Flex direction="column" ml="20px">
      <Text {...descriptiveText}>{title}</Text>
      <Text {...minorText}>{location}</Text>
      <Text {...minorText}>{dates}</Text>
    </Flex>
  </Flex>
);
