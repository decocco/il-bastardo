import React from "react";
import { Flex, keyframes, Text } from "@chakra-ui/react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "theme";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const animation = css`
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
  animation-name: ${rotate};
  animation-timing-function: linear;
`;

const InnerContainer = styled(Flex)`
  ${animation};
  align-items: center;
  background-color: ${colors.black};
  border: 4px solid;
  border-color: ${colors.white};
  border-radius: 100px;
  height: 75px;
  width: 75px;
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
`;

const ExternalContainer = styled(Flex)`
  align-items: center;
  background-color: ${colors.black};
  border-radius: 100px;
  height: 82px;
  width: 82px;
  justify-content: center;
`;

export const LoadingSpinner: React.FC = () => {
  return (
    <ExternalContainer>
      <InnerContainer>
        <Text
          color="white"
          fontFamily="italic"
          fontSize="30px"
          position="relative"
          top="2px"
        >
          IB
        </Text>
      </InnerContainer>
    </ExternalContainer>
  );
};
