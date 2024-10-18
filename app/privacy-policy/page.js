"use client";
import Head from "next/head";
import Banner from "../components/common/common-banner/CommonBanner";
import PrivacyIntro from "../components/common/privacy-intro/PrivacyIntro";
// img
import bannerImg from "../assets/banner/privacybanner.webp";

const PrivacyPolicy = () => {
  return (
    <div>
      <Head>
        <title>Privacy Policy | NewEdge Realty - Your Data, Our Priority</title>
        <meta
          name="description"
          content="Learn about NewEdge Realty's privacy policy and how we protect your personal data. We value your privacy and ensure secure real estate transactions."
        />
      </Head>
      <Banner
        name="Privacy Policy"
        indexpage="Home"
        indexvisit="/"
        activepage="Privacy Policy"
        bgImg={bannerImg}
      />
      <PrivacyIntro />
    </div>
  );
};
export default PrivacyPolicy;
