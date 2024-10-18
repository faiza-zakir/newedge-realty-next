"use client";
import Head from "next/head";
import Banner from "../components/common/common-banner/CommonBanner";
import Intro from "../components/investment/Intro/Intro";
import WhyInvest from "../components/investment/why-invest/WhyInvest";
import Maps from "../components/dholera/maps/Maps";
import KeyFeaturesSlider from "../components/investment/key-features-slider/KeyFeaturesSlider";
import ContactSection from "../components/home/contact-section/ContactSection";
import FAQSection from "../components/home/faq-section/FAQSection";
// img
import bannerImg from "../assets/banner/ahmadabadbanner.webp";
// data
import { investmentData } from "../db/investmentData";

const Ahmadabad = () => {
  const { ahmadabad } = investmentData;
  const { intro, benefits, whyInvest, benefits2, locations } = ahmadabad;

  return (
    <>
      <Head>
        <title>
          Buy Property in Ahmedabad with Newedge | Expert Real Estate Solutions
        </title>
        <meta
          name="description"
          content="Looking to buy property in Ahmedabad? Newedge provides SEO-optimized listings, market insights, and expert advice for residential and commercial investments."
        />
      </Head>
      <Banner
        name="AHMEDABAD"
        indexpage="Home"
        indexvisit="/"
        activepage="Investment"
        bgImg={bannerImg}
      />
      <Intro introData={intro} />
      <KeyFeaturesSlider
        title="Key Benefits of Ahmedabad"
        subTitle=""
        keyFeaturesData={benefits}
      />
      <WhyInvest whyInvestData={whyInvest} />
      <KeyFeaturesSlider
        title="Key Benefits of  Sabarmati Riverfront"
        subTitle=""
        keyFeaturesData={benefits2}
      />
      <Maps mapsData={locations} />
      <ContactSection />
      <FAQSection />
    </>
  );
};

export default Ahmadabad;
