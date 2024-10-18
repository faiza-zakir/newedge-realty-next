"use client";
import Head from "next/head";
import Banner from "../components/common/common-banner/CommonBanner";
import Intro from "../components/about/Intro/Intro";
import ContactSection from "../components/home/contact-section/ContactSection";
// import WhyChooseSection from "../components/home/why-choose-section/WhyChooseSection";
import Mission from "../components/about/mission/Mission";
import Vision from "../components/about/vision/Vision";
import Founder from "../components/about/founder/Founder";
import TeamList from "../components/about/team/TeamList";
import FAQSection from "../components/home/faq-section/FAQSection";
// img
import bannerImg from "../assets/banner/aboutbanner.webp";
// data
import { aboutData } from "../db/aboutData";
import CountsSection from "../components/about/counts-section/CountsSection";

const About = () => {
  const { about, topCounts, whyChoose, mission, vision, founder, team } =
    aboutData;
  return (
    <>
      <Head>
        <title>
          Newedge Property Management Services | Trusted Real Estate Agency
        </title>
        <meta
          name="description"
          content="Newedge, is your trusted real estate agency specializing in property management. We maximize your property's value with tailored solutions and exceptional service."
        />
      </Head>
      <Banner
        name="About Us"
        indexpage="Home"
        indexvisit="/"
        activepage="About Us"
        bgImg={bannerImg}
      />
      <Intro introData={about} />
      <CountsSection countsData={topCounts} />
      {/* <WhyChooseSection whyChooseData={whyChoose} /> */}
      <Mission missionData={mission} />
      <Vision visionData={vision} />
      <Founder founderData={founder} />
      <TeamList teamData={team} />
      <ContactSection />
      <FAQSection />
    </>
  );
};

export default About;
