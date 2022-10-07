import { Flex, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useRouter } from "next/dist/client/router";
import { useTranslation } from "next-i18next";
import { colors } from "theme";

const Container = styled(Flex)`
  border-bottom: 4px solid
    ${({ isInDrawer }) => (isInDrawer ? colors.white : colors.black)};
  color: ${({ isInDrawer }) => (isInDrawer ? colors.black : colors.white)};
  margin-right: ${({ mr }) => mr};
  margin-bottom: ${({ mb }) => mb};
  transition: border-bottom 0.4s ease-in;
  &:hover {
    border-bottom: 4px solid
      ${({ isInDrawer }) => (isInDrawer ? colors.black : colors.white)};
    cursor: pointer;
  }
`;

type Props = {
  isInDrawer: boolean;
  isLast?: boolean;
  onClose: () => void;
  path: string;
};

const NavbarOption: React.FC<Props> = ({
  isInDrawer,
  isLast = false,
  onClose,
  path,
}) => {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <Container
      isInDrawer={isInDrawer ? 1 : 0}
      mb={isLast || !isInDrawer ? "0px" : "20px"}
      mr={
        isLast || isInDrawer ? "0px" : { lg: "6vw", xl: "8vw", "2xl": "12vw" }
      }
      onClick={() => {
        if (isInDrawer) onClose();
        router.push(`/${path}`);
      }}
    >
      <Text fontSize={22}>{t(path)}</Text>
    </Container>
  );
};

export default NavbarOption;
