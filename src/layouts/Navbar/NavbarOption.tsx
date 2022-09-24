import { Flex, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useRouter } from "next/dist/client/router";
import { useTranslation } from "next-i18next";
import { colors } from "theme";

const Container = styled(Flex)`
  border-bottom: 4px solid ${colors.black};
  color: ${colors.white};
  margin-right: ${({ mr }) => mr};
  transition: border-bottom 0.4s ease-in;
  &:hover {
    border-bottom: 4px solid ${colors.white};
    cursor: pointer;
  }
`;

type Props = {
  isLast?: boolean;
  path: string;
};

const Navbar: React.FC<Props> = ({ isLast = false, path }) => {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <Container
      mr={isLast ? "0px" : "50px"}
      onClick={() => router.push(`/${path}`)}
    >
      <Text>{t(path)}</Text>
    </Container>
  );
};

export default Navbar;
