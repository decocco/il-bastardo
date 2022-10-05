import React from "react";
import { CircularProgress, Flex, Image, Text } from "@chakra-ui/react";
import { fontsStyle } from "theme";

import { Modal } from "../../commons/Modal";

const { sectionTitle, descriptiveText } = fontsStyle;

type Props = {
  grade: number;
  logo: string;
  name: string;
  isOpen: boolean;
  onClose: () => void;
};

const getColor = (value: number): string => {
  if (value <= 40) return "error";
  if (value <= 75) return "warning";
  return "lightPrimary";
};

export const TechModal: React.FC<Props> = ({
  isOpen,
  onClose,
  grade,
  logo,
  name,
}) => {
  const color = getColor(grade);
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={name}>
      <Flex direction="column" padding="20px">
        <Flex direction="row">
          <Flex alignItems="center" direction="column" justify="center">
            <CircularProgress color={color} size={120} value={grade} />
            <Text align="center" {...sectionTitle}>
              {grade}%
            </Text>
          </Flex>
          <Text ml="30px" {...descriptiveText}>
            Experience with the technology Experience with the technology
            Experience with the technology Experience with the technology
            Experience with the technology Experience with the technology
            Experience with the technology Experience with the technology
            Experience with the technology Experience with the technology
            Experience with the technology
          </Text>
        </Flex>
        <Image alt={`modal-${name}`} ml="auto" src={logo} w="40px" />
      </Flex>
    </Modal>
  );
};
