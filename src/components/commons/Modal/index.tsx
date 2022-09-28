import React from "react";
import {
  Box,
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { colors } from "theme";

const CloseButton = styled(ModalCloseButton)`
  :focus {
    box-shadow: none;
  }
  :hover {
    background-color: unset;
    color: ${colors.darkPrimary};
    font-size: 16px;
  }
`;

type Props = {
  closeOnOverlayClick?: boolean;
  initialRef?: React.MutableRefObject<null>;
  isOpen: boolean;
  onClose: () => void;
  title: string;
  size?: string;
};

export const Modal: React.FC<Props> = ({
  children,
  closeOnOverlayClick = true,
  initialRef,
  isOpen,
  onClose,
  title,
  size = "2xl",
}) => (
  <ChakraModal
    closeOnOverlayClick={closeOnOverlayClick}
    initialFocusRef={initialRef}
    isOpen={isOpen}
    onClose={onClose}
    size={size}
  >
    <ModalOverlay />
    <ModalContent borderRadius={16}>
      <ModalHeader
        color="darkPrimary"
        fontSize="24px"
        fontWeight="600"
        textAlign="center"
      >
        {title}
      </ModalHeader>
      <CloseButton top="4" />
      <Box borderBottom="2px solid " borderColor="black" m={0} />
      <ModalBody p="16px">{children}</ModalBody>
    </ModalContent>
  </ChakraModal>
);
