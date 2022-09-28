import React, { useState } from "react";
import { Flex, Text, keyframes } from "@chakra-ui/react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors } from "theme";

type Props = {
  ml?: string;
  mr?: string;
};

const up = `{
	transform: rotate(-7deg);
}`;
const down = `{
	transform: rotate(7deg);
}`;

const shake = keyframes`
  0% ${up}
  50% ${down}
  100% ${up}
`;

const animation = css`
  animation-name: ${shake};
  animation-duration: 0.15s;
  animation-timing-function: cubic-bezier(0.65, 0.05, 0.36, 1);
  animation-fill-mode: both;
  animation-iteration-count: 3;
`;

const Container = styled(Flex)`
  ${({ animate }) => animate && animation}
  background-color: ${colors.black};
  border: 4px solid;
  border-color: ${colors.white};
  border-radius: 100px;
  cursor: pointer;
  justify-content: center;
  min-width: 300px;
  margin-left: ${({ ml }) => ml};
  margin-right: ${({ mr }) => mr};
  padding-left: 10px;
  padding-right: 10px;
  transform: rotate(-7deg);
`;

export const Logo: React.FC<Props> = ({ ml, mr }) => {
  const [animate, setAnimate] = useState(false);
  const router = useRouter();

  const shouldAnimate = () => {
    if (router.route === "/") {
      setAnimate(true);
    } else {
      router.push("/");
    }
  };

  return (
    <Container
      animate={animate}
      ml={ml}
      mr={mr}
      onAnimationEnd={() => setAnimate(false)}
      onClick={shouldAnimate}
    >
      <Text color="white" fontFamily="italic" fontSize="40px">
        Il Bastardo
      </Text>
    </Container>
  );
};
