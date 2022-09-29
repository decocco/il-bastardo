import { ChangeEventHandler } from "react";
import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/react";

import { InputStyle } from "./style";

type Props = {
  errorMessage: string;
  initialRef?: React.MutableRefObject<null>;
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  value: string;
};

const Input: React.FC<Props> = ({
  errorMessage = "",
  initialRef = undefined,
  label,
  onChange,
  placeholder = "",
  value,
}) => (
  <FormControl isInvalid={!!errorMessage} mb="0px">
    <FormLabel>{label}</FormLabel>
    <InputStyle
      errorBorderColor="error"
      onChange={onChange}
      placeholder={placeholder || label}
      ref={initialRef}
      value={value}
    />
    <Flex minH="16px" mt="8px">
      <FormErrorMessage color="error" justifyContent="end" mt="0" w="100%">
        {errorMessage}
      </FormErrorMessage>
    </Flex>
  </FormControl>
);

export default Input;
