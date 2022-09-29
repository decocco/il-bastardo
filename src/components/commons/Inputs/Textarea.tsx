import { ChangeEventHandler } from "react";
import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/react";

import { TextareaStyle } from "./style";

type Props = {
  errorMessage: string;
  label: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement> | undefined;
  placeholder?: string;
  value: string;
};

const Textarea: React.FC<Props> = ({
  errorMessage = "",
  label,
  onChange,
  placeholder = "",
  value,
}) => (
  <FormControl isInvalid={!!errorMessage} mb="16px">
    <FormLabel>{label}</FormLabel>
    <TextareaStyle
      errorBorderColor="error"
      onChange={onChange}
      placeholder={placeholder || label}
      value={value}
    />
    <Flex minH="16px" mt="8px">
      <FormErrorMessage color="error" justifyContent="end" mt="0" w="100%">
        {errorMessage}
      </FormErrorMessage>
    </Flex>
  </FormControl>
);

export default Textarea;
