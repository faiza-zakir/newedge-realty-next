"use client";
import Head from "next/head";
import Banner from "../components/common/common-banner/CommonBanner";
import Intro from "../components/dholera/intro/Intro";
import Maps from "../components/dholera/maps/Maps";
import MoreFeatures from "../components/dholera/more-features/MoreFeatures";
import Detail from "../components/dholera/detail/Detail";
import DevelopmentPlan from "../components/dholera/development-plan/DevelopmentPlan";
import Dmic from "../components/dholera/dmic/Dmic";
import Airport from "../components/dholera/airport/Airport";
import PhasesSlider from "../components/investment/phases-slider/PhasesSlider";
import Investors from "../components/dholera/investors/Investors";
import ContactSection from "../components/home/contact-section/ContactSection";
import FAQSection from "../components/home/faq-section/FAQSection";
// img
import bannerImg from "../assets/banner/dholerabanner.webp";
// data
import { investmentData } from "../db/investmentData";

const Dholera = () => {
  const { dholera } = investmentData;
  const {
    intro,
    maps,
    advatnages,
    industries,
    plan,
    dmic,
    airport,
    advantage,
    expectations,
    sectors,
    benefits,
    investors,
  } = dholera;

  return (
    <>
      <Head>
        <title>
          Invest in Dholera Special Investment Region (DSIR) | Newedge Realty
        </title>
        <meta
          name="description"
          content="Ready to take your investment to the next level? Discover Dholera Special Investment Region (DSIR) with Newedge!"
        />
      </Head>
      <Banner
        name="DHOLERA SIR"
        indexpage="Home"
        indexvisit="/"
        activepage="Investment"
        bgImg={bannerImg}
      />
      <Intro introData={intro} />
      <Maps mapsData={maps} />
      <MoreFeatures
        title="Advantages of Dholera"
        moreFeaturesData={advatnages}
      />
      <Detail detailData={industries} />
      <DevelopmentPlan devPlanData={plan} />
      <Dmic dmicData={dmic} />
      <Airport airportData={airport} />
      <Detail detailData={advantage} />
      <MoreFeatures
        title="What to Expect When You Invest in Dholera?"
        moreFeaturesData={expectations}
      />
      <MoreFeatures
        title="Permissible Industrial Sectors"
        moreFeaturesData={sectors}
      />
      <PhasesSlider
        title="Market Potential"
        subTitle="Dholera Special Investment Region (SIR) offers immense market potential for investors due to its strategic location, well-planned infrastructure, and government-backed initiatives. Here are some key factors highlighting its investment potential:"
        phasesData={benefits}
      />
      <Investors investorsData={investors} />
      <ContactSection />
      <FAQSection />
    </>
  );
};

export default Dholera;
