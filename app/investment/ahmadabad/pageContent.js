"use client";
import Banner from "../../components/common/common-banner/CommonBanner";
import Intro from "../../components/investment/Intro/Intro";
import WhyInvest from "../../components/investment/why-invest/WhyInvest";
import Maps from "../../components/dholera/maps/Maps";
import KeyFeaturesSlider from "../../components/investment/key-features-slider/KeyFeaturesSlider";
import ContactSection from "../../components/home/contact-section/ContactSection";
import FAQSection from "../../components/investment/faq-section/FAQSection";
// img
import bannerImg from "../../assets/banner/ahmadabadbanner.webp";
// data
import { investmentData } from "../../db/investmentData";

const PageContent = () => {
  const { ahmadabad } = investmentData;
  const { intro, benefits, whyInvest, benefits2, locations } = ahmadabad;

  return (
    <>
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

export default PageContent;
