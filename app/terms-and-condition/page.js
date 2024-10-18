"use client";
import Head from "next/head";
import Banner from "../components/common/common-banner/CommonBanner";
import TermsIntro from "../components/common/terms-intro/TermsIntro";
// img
import bannerImg from "../assets/banner/termsbanner.webp";

const TermsCondition = () => {
  return (
    <div>
      <Head>
        <title>
          Terms and Conditions | NewEdge Realty - Trusted Real Estate Partner
        </title>
        <meta
          name="description"
          content="Read NewEdge Realty's terms and conditions. We offer a trustworthy and transparent real estate service that puts your interests first in every transaction."
        />
      </Head>
      <Banner
        name="Terms & Condition"
        indexpage="Home"
        indexvisit="/"
        activepage="Terms & Condition"
        bgImg={bannerImg}
      />
      <TermsIntro />
    </div>
  );
};
export default TermsCondition;
