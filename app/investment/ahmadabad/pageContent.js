"use client";
import Banner from "../../components/common/common-banner/CommonBanner";
import Intro from "../../components/investment/Intro/Intro";
import Maps from "../../components/dholera/maps/Maps";
import KeyBenefitsSlider from "@/app/components/ahmadabad/key-benefits-slider/KeyBenefitsSlider";
import ContactSection from "../../components/home/contact-section/ContactSection";
import FAQSection from "../../components/investment/faq-section/FAQSection";
// img
import bannerImg from "../../assets/banner/ahmadabadbanner.webp";
// data
import { investmentData } from "../../db/investmentData";

const PageContent = () => {
  const { ahmadabad } = investmentData;
  const { intro, benefits, locations } = ahmadabad;

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
      <KeyBenefitsSlider keyBenefitsData={benefits} />
      <Maps mapsData={locations} />
      <ContactSection />
      <FAQSection />
    </>
  );
};

export default PageContent;
