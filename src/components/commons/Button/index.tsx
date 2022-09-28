import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "theme";

const { primary, white, lightPrimary } = colors;

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
  background-color: ${lightPrimary};
  border: 2px solid ${lightPrimary};
  color: ${white};
  :hover {
    background-color: ${white};
    border-color: ${lightPrimary};
    color: ${lightPrimary};
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

const StyledButton = styled(ChakraButton)`
  border-radius: ${({ borderRadius }) => borderRadius || "16px"};
  font-size: ${({ fsize }) => fsize};
  font-weight: ${({ fontWeight }) => fontWeight || "600"};
  max-width: ${({ maxW }) => maxW || "150px"};
  min-width: fit-content;
  width: ${({ width }) => (width ? width : "20vw")};
  ${({ priority }) => priority === "primary" && primaryStyle}
  ${({ priority }) => priority === "secondary" && secondaryStyle}
  ${({ disabled }) => disabled && disabledStyle}
}`;

type Props = ButtonProps & {
  priority: string;
};

export const Button: React.FC<Props> = ({ children, priority, ...rest }) => (
  <StyledButton priority={priority} {...rest}>
    {children}
  </StyledButton>
);
