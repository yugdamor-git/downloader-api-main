import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

////////////// function for languages handler //////////
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}

import Footer from "../components/ui/Footer";
function MyApp({ Component, pageProps }) {
  const { t } = useTranslation();
  return (
    <>
      <Component {...pageProps} />
      <Footer
        home={t("home:home_link")}
        blog={t("home:blog_link")}
        contact={t("home:contact_link")}
      />
    </>
  );
}

export default appWithTranslation(MyApp);
