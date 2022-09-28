import React from "react";
import { FormControl, FormLabel, ModalFooter } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

import { Button } from "../Button";
import { Input } from "../Input";
import { Modal } from "../Modal";

type Props = {
  initialRef: React.MutableRefObject<null>;
  isOpen: boolean;
  onClose: () => void;
};

export const ContactModal: React.FC<Props> = ({
  initialRef,
  isOpen,
  onClose,
}) => {
  const { t } = useTranslation("common");
  return (
    <Modal
      initialRef={initialRef}
      isOpen={isOpen}
      onClose={onClose}
      title={t("sendMeAMessage")}
    >
      <FormControl>
        <FormLabel>First name</FormLabel>
        <Input placeholder="First name" ref={initialRef} />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Last name</FormLabel>
        <Input placeholder="Last name" />
      </FormControl>

      <ModalFooter>
        <Button mr={3} priority="primary">
          Save
        </Button>
        <Button onClick={onClose} priority="secondary">
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};
