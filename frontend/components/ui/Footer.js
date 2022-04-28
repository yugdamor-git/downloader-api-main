import Link from "next/link";
import React from "react";

const Footer = ({ home, blog, contact }) => {
  const Links = [
    { id: 1, href: "/", title: home },
    { id: 2, href: "/blog", title: blog },
    {
      id: 3,
      href: "https://twitchclip-download.savetube.me/",
      title: "Twitch Clip Downloader",
    },
    {
      id: 4,
      href: "https://youtube.thumbnail-download.net/",
      title: "YouTube Thumbnail Downloader",
    },
    {
      id: 5,
      href: "https://insta-audio.savetube.me/",
      title: "Instagram to MP3",
    },
    { id: 6, href: "/blog/contact-us", title: contact },
  ];
  return (
    <footer className="bg-dark p-[48px] bg-[#343a40] text-white text-left md:text-center">
      {Links.map((link) => (
        <span className=" mr-2" key={link.id}>
          <Link href={link.href}>{link.title}</Link>
        </span>
      ))}
    </footer>
  );
};

export default Footer;
