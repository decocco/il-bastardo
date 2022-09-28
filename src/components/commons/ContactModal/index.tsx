import React, { useState } from "react";
import { FormControl, FormLabel, ModalFooter } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

import { Button } from "../Button";
import { Input, Textarea } from "../Inputs";
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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onChange =
    (field: string) => (event: { target: { value: string } }) => {
      if (field === "name") setName(event.target.value);
      if (field === "email") setEmail(event.target.value);
      if (field === "message") setMessage(event.target.value);
    };

  const validateFields = () => {
    console.log("validating fields");
    return true;
  };

  const onSave = () => {
    if (validateFields()) console.log(`email send ${name} ${email} ${message}`);
  };

  return (
    <Modal
      initialRef={initialRef}
      isOpen={isOpen}
      onClose={onClose}
      title={t("sendMeAMessage")}
    >
      <FormControl mb="16px">
        <FormLabel>{t("name")}</FormLabel>
        <Input
          onChange={onChange("name")}
          placeholder={t("name")}
          ref={initialRef}
          value={name}
        />
      </FormControl>

      <FormControl mb="16px">
        <FormLabel>{t("email")}</FormLabel>
        <Input
          onChange={onChange("email")}
          placeholder={t("email")}
          value={email}
        />
      </FormControl>

      <FormControl>
        <FormLabel>{t("message")}</FormLabel>
        <Textarea
          onChange={onChange("message")}
          placeholder={t("message")}
          value={message}
        />
      </FormControl>

      <ModalFooter>
        <Button isLoading mr={3} priority="primary">
          Save
        </Button>
        <Button mr={3} onClick={onSave} priority="primary">
          Save
        </Button>
        <Button onClick={onClose} priority="secondary">
          Cancel
        </Button>
        <Button disabled priority="primary">
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};
