import { Input, Textarea } from "@chakra-ui/react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "theme";

const { darkPrimary, primary, white } = colors;

const basic = css`
  background-color: ${white};
  border-color: ${primary};
  border-radius: 16px;
  color: ${darkPrimary};
  padding: 0 16px;
`;

const hover = css`
  :hover {
    border: 1px solid;
    border-color: ${primary};
  }
`;

const focus = css`
  :focus {
    border: 1px solid;
    border-color: ${primary};
  }
`;

export const InputStyle = styled(Input)`
  ${basic}
  ${focus}
  ${hover}
}`;

export const TextareaStyle = styled(Textarea)`
  ${basic}
  ${focus}
  ${hover}
  padding: 8px 16px;
}`;
