import React, { createContext, useContext } from "react";
import { useDisclosure } from "@chakra-ui/react";

export const GralContext = createContext({
  isOpenContactModal: false,
  onCloseContactModal: () => {
    return;
  },
  onOpenContactModal: () => {
    return;
  },
});

export const GralContextProvider: React.FC = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const values = React.useMemo(
    () => ({
      isOpenContactModal: isOpen,
      onCloseContactModal: onClose,
      onOpenContactModal: onOpen,
    }),
    [isOpen, onClose, onOpen]
  );
  return <GralContext.Provider value={values}>{children}</GralContext.Provider>;
};

export const useGralContext = () => {
  const context = useContext(GralContext);

  if (!context) {
    console.error("Error deploying Gral Context!");
  }

  return context;
};

export default useGralContext;
