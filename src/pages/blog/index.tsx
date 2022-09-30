import { defaultLocale } from "lib/constants";
import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { ComingSoon } from "components/commons/ComingSoon";

const Blog: NextPage = () => {
  return <ComingSoon />;
};

export const getStaticProps = async ({ locale = defaultLocale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Blog;
