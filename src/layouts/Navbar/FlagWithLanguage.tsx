import { ChevronDownIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

type Props = {
  isEnglish: boolean;
  withChevron?: boolean;
};

const FlagWithLanguage: React.FC<Props> = ({
  isEnglish,
  withChevron = false,
}) => (
  <Flex
    alignItems="center"
    color={withChevron ? "white" : "black"}
    direction="row"
  >
    <Image
      alt="language selector"
      height="25px"
      src={isEnglish ? "/assets/eng.png" : "/assets/esp.png"}
      width="40px"
    />
    <Text px="10px">{isEnglish ? "English" : "Español"}</Text>
    {withChevron && <ChevronDownIcon fontSize="22px" />}
  </Flex>
);

export default FlagWithLanguage;
