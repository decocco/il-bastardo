import React, { useState } from "react";
import { ModalFooter } from "@chakra-ui/react";
import { emailIsValid } from "lib/validations";
import { useTranslation } from "next-i18next";

import { Button } from "../Button";
import { Input, Textarea } from "../Inputs";
import { Modal } from "../Modal";

type Props = {
  initialRef: React.MutableRefObject<null>;
  isOpen: boolean;
  onClose: () => void;
};

type Fields = "name" | "email" | "comment";

export const ContactModal: React.FC<Props> = ({
  initialRef,
  isOpen,
  onClose,
}) => {
  const { t } = useTranslation("common");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const [errorNameMessage, setErrorNameMessage] = useState("");
  const [errorEmailMessage, setErrorEmailMessage] = useState("");
  const [errorCommentMessage, setErrorCommentMessage] = useState("");

  const clearFields = () => {
    setName("");
    setEmail("");
    setComment("");
  };

  const clearErrors = () => {
    setErrorNameMessage("");
    setErrorEmailMessage("");
    setErrorCommentMessage("");
  };

  const getSetFunctions = (field: Fields) => {
    return {
      name: { setValue: setName, setError: setErrorNameMessage },
      email: { setValue: setEmail, setError: setErrorEmailMessage },
      comment: { setValue: setComment, setError: setErrorCommentMessage },
    }[field];
  };

  const onChange =
    (field: Fields) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = event.target;
      const { setValue, setError } = getSetFunctions(field);
      setValue(value);
      if (value) setError("");
    };

  const validateName = () => {
    if (name) return true;
    setErrorNameMessage(t("errorName"));
    return false;
  };

  const validateEmail = () => {
    if (!!email && emailIsValid(email)) return true;
    setErrorEmailMessage(t("errorEmail"));
    return false;
  };

  const validateComment = () => {
    if (comment) return true;
    setErrorCommentMessage(t("errorComment"));
    return false;
  };

  const fieldsAreValid = () =>
    validateComment() && validateEmail() && validateName();

  const onSave = () => {
    if (fieldsAreValid()) {
      clearErrors();
      //TODO: add gql mutation
    }
  };

  const clearAll = () => {
    onClose();
    clearErrors();
    clearFields();
  };

  return (
    <Modal
      initialRef={initialRef}
      isOpen={isOpen}
      onClose={clearAll}
      title={t("sendMeAMessage")}
    >
      <Input
        errorMessage={errorNameMessage}
        initialRef={initialRef}
        label={t("name")}
        onChange={onChange("name")}
        placeholder={t("name")}
        value={name}
      />

      <Input
        errorMessage={errorEmailMessage}
        label={t("email")}
        onChange={onChange("email")}
        placeholder={t("email")}
        value={email}
      />
      <Textarea
        errorMessage={errorCommentMessage}
        label={t("comment")}
        onChange={onChange("comment")}
        placeholder={t("comment")}
        value={comment}
      />

      <ModalFooter px="0">
        <Button mr={3} onClick={onSave} priority="primary">
          {t("save")}
        </Button>
        <Button onClick={clearAll} priority="secondary">
          {t("cancel")}
        </Button>
      </ModalFooter>
    </Modal>
  );
};
