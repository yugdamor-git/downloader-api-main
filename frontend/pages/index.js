import Head from "next/head";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import meta from "../public/meta";
////////////// function for languages handler //////////
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}
//// components ////////

import Navbar from "../components/ui/navbar/Navbar";
import Link from "../components/home/Link";
import Cards from "../components/home/Cards";
import YoutubeShorts from "../components/home/Youtube-shorts";
import Faqs from "../components/home/Faqs";

export default function Home(props) {
  const router = useRouter();
  const { t } = useTranslation();
  const CARDS = [
    {
      id: 1,
      img: "fast.svg",
      title: `${t("home:card1_title")}`,
      description: `${t("home:card1_description")}`,
    },
    {
      id: 2,
      img: "loop.svg",
      title: `${t("home:card2_title")}`,
      description: `${t("home:card2_description")}`,
    },
    {
      id: 3,
      img: "shield.svg",
      title: `${t("home:card3_title")}`,
      description: `${t("home:card3_description")}`,
    },
    {
      id: 4,
      img: "ux-design.svg",
      title: `${t("home:card4_title")}`,
      description: `${t("home:card4_description")}`,
    },
    
    {
      id: 5,
      img: "instructions.svg",
      title: `${t("home:card5_title")}`,
      description: `${t("home:card5_description")}`,
    },
    {
      id: 6,
      img: "computing.svg",
      title: `${t("home:card6_title")}`,
      description: `${t("home:card6_description")}`,
    },
  ];


  const FAQS_DATA = [
    {
      id: 1,
      title: `${t("home:faqs1_title")}`,
      description: `${t("home:faqs1_description")}`,
    },
    {
      id: 2,
      title: `${t("home:faqs2_title")}`,
      description: `${t("home:faqs2_description")}`,
    },
    {
      id: 3,
      title: `${t("home:faqs3_title")}`,
      description: `${t("home:faqs3_description")}`,
    },
    {
      id: 4,
      title: `${t("home:faqs4_title")}`,
      description: `${t("home:faqs4_description")}`,
    },
  ];


  return (
    <div className="text-3xl text-center">we are updating our site, we will be back soon.</div>
  )

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>{t("home:home_page_title")}</title>
        <meta name="og:title" content={t("home:home_page_title")} />
        <meta name="description" content={`${t("home:meta_description")}`} />
        <meta name="og:description" content={`${t("home:meta_description")}`} />
        <meta
          property="og:url"
          content={
            process.env.BASE_DOMAIN +
            (router.locale != "en" && router.locale
              ? `/${router.locale != "en" && router.locale}`
              : "")
          }
        />
        {meta}
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/"
          hrefLang="x-default"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/de"
          hrefLang="de"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/es"
          hrefLang="es"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/fr"
          hrefLang="fr"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/hi"
          hrefLang="hi"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/id"
          hrefLang="id"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/it"
          hrefLang="it"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/ja"
          hrefLang="ja"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/ko"
          hrefLang="ko"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/my"
          hrefLang="my"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/ms"
          hrefLang="ms"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/nl"
          hrefLang="nl"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/ph"
          hrefLang="en-PH"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/pt"
          hrefLang="pt"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/ru"
          hrefLang="ru"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/th"
          hrefLang="th"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/tr"
          hrefLang="tr"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/vi"
          hrefLang="vi"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/zh"
          hrefLang="zh"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/zt"
          hrefLang="zt"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/sa"
          hrefLang="sa"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/bn"
          hrefLang="bn"
        />
      </Head>
      <Navbar
        home={t("home:home_link")}
        blog={t("home:blog_link")}
        contact={t("home:contact_link")}
        mp3={t("home:youtube_to_mp3")}
        thumbnail={t("home:youtube_thumbnail")}
        href="/"
      />
      <div className="flex justify-center flex-center mt-5">
      <ins className="adsbygoogle"
     style={{display:"inline-block",width:"320px",height:"100px"}}
     data-ad-client="ca-pub-3476621303569503"
     data-ad-slot="5118507655"></ins>
      </div>
      <Link
        data={{
          title: `${t("home:Url_title")}`,
          p: `${t("home:Url_p")}`,
          placeholder: `${t("home:url_placeholder")}`,
          button: `${t("home:button")}`,
          wrong: `${t("home:url_wrong")}`,
        }}
        contentType="video"
      />
      <div className="flex justify-center flex-center mt-5">
      <ins className="adsbygoogle"
     style={{display:"block"}}
     data-ad-client="ca-pub-3476621303569503"
     data-ad-slot="3627285369"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
      </div>

      <Cards
        cards={CARDS}
        title={t("home:card_main_title")}
        p={t("home:card_main_p")}
      />
      <YoutubeShorts
        sec1_title={t("home:y_s_v_d")}
        sec1_p={t("home:y_s_v_d_description")}
        sec1_share={t("home:share")}
        sec2_title={t("home:What_y_s")}
        sec2_p1={t("home:What_y_s_p1")}
        sec2_p2={t("home:What_y_s_p2")}
        sec2_p3={t("home:What_y_s_p3")}
        sec2_p4={t("home:What_y_s_p4")}
        sec2_p5={t("home:What_y_s_p5")}
        sec2_p6={t("home:What_y_s_p6")}
        sec2_p7={t("home:What_y_s_p7")}
        sec3_title={t("home:how_m_y_s")}
        sec3_p1={t("home:how_m_y_s_p1")}
        sec3_p2={t("home:how_m_y_s_p2")}
        sec3_p3={t("home:how_m_y_s_p3")}
        sec3_p4={t("home:how_m_y_s_p4")}
        sec3_p5={t("home:how_m_y_s_p5")}
        sec4_title={t("home:How_d_y_s")}
        sec4_p1={t("home:How_d_y_s_p1")}
        sec4_p2={t("home:How_d_y_s_p2")}
        sec4_p3={t("home:How_d_y_s_p3")}
        sec4_p4={t("home:How_d_y_s_p4")}
        sec4_p5={t("home:How_d_y_s_p5")}
        sec4_p6={t("home:How_d_y_s_p6")}
      />
      <Faqs faqs={FAQS_DATA} faq_title={t('home:faqs_main_title')} />
    </div>
  );
}
