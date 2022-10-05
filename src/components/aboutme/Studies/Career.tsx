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
  <Flex alignItems="center" direction="row" m="15px" minW="180px">
    <Image alt="name" height="100px" src={logo} />
    <Flex direction="column" ml="20px">
      <Text {...descriptiveText}>{title}</Text>
      <Text {...minorText}>{location}</Text>
      <Text {...minorText}>{dates}</Text>
    </Flex>
  </Flex>
);
