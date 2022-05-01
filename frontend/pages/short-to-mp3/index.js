import Head from "next/head";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import meta from "../../public/meta";

////////////// function for languages handler //////////
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["shortMp3", "home"])),
    },
  };
}
//// components ////////
import Navbar from "../../components/ui/navbar/Navbar";
import Link from "../../components/home/Link";
import Cards from "../../components/youtube-to-mp3/Cards";
import Converter from "../../components/youtube-to-mp3/Converter";
import HowToConvert from "../../components/youtube-to-mp3/HowToConvert";
import Faqs from "../../components/home/Faqs";

export default function ShortToMp3(props) {
  const router = useRouter();
  const { t } = useTranslation();
  const CARDS = [
    {
      id: 1,
      img: "fast.svg",
      title: `${t("shortMp3:card1_title")}`,
      description: `${t("shortMp3:card1_paragraph")}`,
    },
    {
      id: 2,
      img: "loop.svg",
      title: `${t("shortMp3:card2_title")}`,
      description: `${t("shortMp3:card2_p")}`,
    },
    {
      id: 3,
      img: "shield.svg",
      title: `${t("shortMp3:card3_title")}`,
      description: `${t("shortMp3:card3_p")}`,
    },
    {
      id: 4,
      img: "ux-design.svg",
      title: `${t("shortMp3:card4_title")}`,
      description: `${t("shortMp3:card4_paragraph")}`,
    },
    {
      id: 5,
      img: "instructions.svg",
      title: `${t("shortMp3:card5_title")}`,
      description: `${t("shortMp3:card5_p")}`,
    },
    {
      id: 6,
      img: "computing.svg",
      title: `${t("shortMp3:card6_title")}`,
      description: `${t("shortMp3:card6_p")}`,
    },
  ];

  // {
  //   id: 4,
  //   img: "ux-design.svg",
  //   title: `${t("home:card4_title")}`,
  //   description: `${t("home:card4_description")}`,
  // },
  
  // {
  //   id: 5,
  //   img: "instructions.svg",
  //   title: `${t("home:card5_title")}`,
  //   description: `${t("home:card5_description")}`,
  // },
  // {
  //   id: 6,
  //   img: "computing.svg",
  //   title: `${t("home:card6_title")}`,
  //   description: `${t("home:card6_description")}`,
  // },
  const FAQS_DATA = [
    {
      id: 1,
      title: `${t("shortMp3:faqs1_title")}`,
      description: `${t("home:faqs1_description")}`,
    },
    {
      id: 2,
      title: `${t("shortMp3:faqs2_title")}`,
      description: `${t("home:faqs2_description")}`,
    },
    {
      id: 3,
      title: `${t("shortMp3:faqs3_title")}`,
      description: `${t("home:faqs3_description")}`,
    },
    {
      id: 4,
      title: `${t("shortMp3:faqs4_title")}`,
      description: `${t("home:faqs4_description")}`,
    },
  ];
  const cards2 = [
    {
      id: 1,
      p: `${t("shortMp3:how_card1_p")}`,
    },
    {
      id: 2,
      p: `${t("shortMp3:how_card2_p")}`,
    },
    {
      id: 3,
      p: `${t("shortMp3:how_card3_p")}`,
    },
  ];

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>{t("shortMp3:meta_title")}</title>
        <meta name="og:title" content={t("shortMp3:meta_title")} />
        <meta
          name="description"
          content={`${t("shortMp3:meta_description")}`}
        />
        <meta
          name="og:description"
          content={`${t("shortMp3:meta_description")}`}
        />
        <meta
          property="og:url"
          content={
            process.env.BASE_DOMAIN +
            (router.locale != "en" && router.locale
              ? `/${router.locale != "en" && router.locale}`
              : "") +
            router.pathname
          }
        />
        {meta}
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/short-to-mp3"
          hrefLang="x-default"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/short-to-mp3"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/de/short-to-mp3"
          hrefLang="de"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/es/short-to-mp3"
          hrefLang="es"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/fr/short-to-mp3"
          hrefLang="fr"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/hi/short-to-mp3"
          hrefLang="hi"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/id/short-to-mp3"
          hrefLang="id"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/it/short-to-mp3"
          hrefLang="it"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/ja/short-to-mp3"
          hrefLang="ja"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/ko/short-to-mp3"
          hrefLang="ko"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/my/short-to-mp3"
          hrefLang="my"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/ms/short-to-mp3"
          hrefLang="ms"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/nl/short-to-mp3"
          hrefLang="nl"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/ph/short-to-mp3"
          hrefLang="en-PH"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/pt/short-to-mp3"
          hrefLang="pt"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/ru/short-to-mp3"
          hrefLang="ru"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/th/short-to-mp3"
          hrefLang="th"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/tr/short-to-mp3"
          hrefLang="tr"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/vi/short-to-mp3"
          hrefLang="vi"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/zh/short-to-mp3"
          hrefLang="zh"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/zt/short-to-mp3"
          hrefLang="zt"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/sa/short-to-mp3"
          hrefLang="sa"
        />
        <link
          rel="alternate"
          href="https://ytshorts.savetube.me/bn/short-to-mp3"
          hrefLang="bn"
        />
      </Head>
      <Navbar
        home={t("home:home_link")}
        blog={t("home:blog_link")}
        contact={t("home:contact_link")}
        mp3={t("home:youtube_to_mp3")}
        thumbnail={t("home:youtube_thumbnail")}
        href="short-to-mp3"
      />

      <div>
      <ins className="adsbygoogle"
     style={{display:"inline-block",width:"320px",height:"100px"}}
     data-ad-client="ca-pub-3476621303569503"
     data-ad-slot="5118507655"></ins>
      </div>
      <Link
        data={{
          title: `${t("shortMp3:l_title")}`,
          p: `${t("shortMp3:l_p")}`,
          placeholder: `${t("home:url_placeholder")}`,
          button: `${t("shortMp3:l_button")}`,
          wrong: `${t("home:url_wrong")}`,
        }}
        contentType="audio"
      />
       <div>
      <ins className="adsbygoogle"
     style={{display:"block"}}
     data-ad-client="ca-pub-3476621303569503"
     data-ad-slot="3627285369"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
      </div>

      <Cards
        cards={CARDS}
        title={t("shortMp3:best_section_title")}
        p={t("shortMp3:best_section_p")}
      />
      
      

      <HowToConvert title={t("shortMp3:how_to_convert_title")} cards={cards2} />
      <Converter title={t("shortMp3:paragraph_title")} paragraph={t("shortMp3:paragraph")}/>
      <Faqs faqs={FAQS_DATA} faq_title={t("shortMp3:faqs_main_title")} />
    </div>
  );
}
