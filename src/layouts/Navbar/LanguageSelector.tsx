import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useRouter } from "next/router";
import FlagWithLanguage from "./FlagWithLanguage";

const LanguageSelector = () => {
  const router = useRouter();

  const selectLanguage = (language: string) => () => {
    if (router.locale === language) return;

    router.push(
      {
        pathname: router.pathname,
        query: router.query,
      },
      undefined,
      { locale: language }
    );
  };

  return (
    <Menu colorScheme="white">
      <MenuButton>
        <FlagWithLanguage withChevron isEnglish={router.locale === "en"} />
      </MenuButton>
      <MenuList minW="30px">
        <MenuItem onClick={selectLanguage("en")}>
          <FlagWithLanguage isEnglish />
        </MenuItem>
        <MenuItem onClick={selectLanguage("es")}>
          <FlagWithLanguage isEnglish={false} />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default LanguageSelector;
