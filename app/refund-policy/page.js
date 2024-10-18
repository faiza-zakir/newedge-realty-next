"use client";
import Head from "next/head";
import Banner from "../components/common/common-banner/CommonBanner";
import RefundIntro from "../components/common/refund-intro/RefundIntro";
// img
import bannerImg from "../assets/banner/refundbanner.webp";

const RefundPolicy = () => {
  return (
    <div>
      <Head>
        <title>
          Refund Policy | NewEdge Realty - Hassle-Free Real Estate Services
        </title>
        <meta
          name="description"
          content="Discover NewEdge Realty's clear and transparent refund policy. Learn how we ensure a seamless experience in real estate services, prioritizing customer satisfaction."
        />
      </Head>
      <Banner
        name="Cancellation & Refund Policy"
        indexpage="Home"
        indexvisit="/"
        activepage="Cancellation & Refund Policy"
        bgImg={bannerImg}
      />
      <RefundIntro />
    </div>
  );
};
export default RefundPolicy;
