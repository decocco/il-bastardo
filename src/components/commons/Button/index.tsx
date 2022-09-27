import { Button } from "@chakra-ui/react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "theme";

const { primary, white, lightPrimary, lighter } = colors;

const primaryStyle = css`
  background-color: ${primary};
  border: 2px solid ${primary};
  color: white;
  :hover {
    background-color: ${white};
    border-color: ${primary};
    color: ${primary};
  }
`;

const secondaryStyle = css`
  background-color: ${lighter};
  border: 2px solid ${lighter};
  color: ${primary};
  :hover {
    background-color: ${primary};
    border-color: ${primary};
    color: ${white};
  }
`;

const disabledStyle = css`
  background-color: ${lightPrimary};
  border: 2px solid ${lightPrimary};
  color: white;
  :hover {
    background-color: ${lightPrimary} !important;
    border: 2px solid ${lightPrimary} !important;
    color: white !important;
  }
`;

const StyButton = styled(Button)`
  border-radius: ${({ borderRadius }) => borderRadius || "4px"};
  font-size: ${({ fsize }) => fsize};
  font-weight: ${({ fontWeight }) => fontWeight || "600"};
  max-width: ${({ maxW }) => maxW || "250px"};
  min-width: fit-content;
  width: ${({ width }) => (width ? width : "20vw")};
  ${({ priority }) => priority === "primary" && primaryStyle}
  ${({ priority }) => priority === "secondary" && secondaryStyle}
  ${({ disabled }) => disabled && disabledStyle}
}`;

export default StyButton;
