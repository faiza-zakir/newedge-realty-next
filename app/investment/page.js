"use client";
import Head from "next/head";
import Banner from "../components/common/common-banner/CommonBanner";
import Intro from "../components/investment/Intro/Intro";
import Features from "../components/investment/features/Features";
import WhyInvest from "../components/investment/why-invest/WhyInvest";
import PhasesSlider from "../components/investment/phases-slider/PhasesSlider";
import Opportunities from "../components/investment/opportunities/Opportunities";
import KeyFeaturesSlider from "../components/investment/key-features-slider/KeyFeaturesSlider";
import ExpertTips from "../components/investment/expert-tips/ExpertTips";
import TestimonialsSection from "../components/home/testimonials-section/TestimonialsSection";
import ContactSection from "../components/home/contact-section/ContactSection";
import FAQSection from "../components/home/faq-section/FAQSection";
// img
import bannerImg from "../assets/banner/investmentbanner.webp";
// data
import { investmentData } from "../db/investmentData";

const Investment = () => {
  const {
    intro,
    key_details,
    factors,
    expertTips,
    phases,
    whyInvest,
    offerings,
    opportunities,
    testimonials,
  } = investmentData;
  return (
    <>
      <Head>
        <title>
          Land Investment Opportunities with Newedge | Grow Your Wealth
        </title>
        <meta
          name="description"
          content="Unlock the potential of land investment with Newedge. Explore premium land deals, expert guidance, and strategic insights to maximize your returns."
        />
      </Head>
      <Banner
        name="Investment"
        indexpage="Home"
        indexvisit="/"
        activepage="Investment"
        bgImg={bannerImg}
      />
      <Intro introData={intro} />
      <Features
        title="KEY BENEFITS OF LAND INVESTMENT"
        featuresData={key_details}
      />
      <KeyFeaturesSlider
        title="KEY FACTORS TO CONSIDER WHEN INVESTING IN LAND"
        subTitle="To make the most out of your land investments, here are some essential factors to keep in mind:"
        keyFeaturesData={factors}
      />
      <ExpertTips expertTipsData={expertTips} />
      <PhasesSlider title="LAND APPRECIATION PHASES" phasesData={phases} />
      <WhyInvest whyInvestData={whyInvest} />
      <Features title="How We Help You Succeed" featuresData={offerings} />
      <Opportunities opportunitiesData={opportunities} />
      <TestimonialsSection testimonialsData={testimonials} />
      <ContactSection />
      <FAQSection />
    </>
  );
};

export default Investment;
