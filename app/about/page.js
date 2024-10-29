"use client";
import Head from "next/head";
import { useState, useEffect } from "react";
import Banner from "../components/common/common-banner/CommonBanner";
import Intro from "../components/about/Intro/Intro";
import ContactSection from "../components/home/contact-section/ContactSection";
import WhyChooseSection from "../components/home/why-choose-section/WhyChooseSection";
import Mission from "../components/about/mission/Mission";
import Vision from "../components/about/vision/Vision";
import Founder from "../components/about/founder/Founder";
import TeamList from "../components/about/team/TeamList";
import FAQSection from "../components/home/faq-section/FAQSection";
// api
import { fatchAboutData } from "../apis/commonApi";
// img
import bannerImg from "../assets/banner/aboutbanner.webp";
// data
import { aboutData } from "../db/aboutData";
import CountsSection from "../components/about/counts-section/CountsSection";

const About = () => {
  const { about, topCounts, whyChoose, mission, vision, founder, team } =
    aboutData;
  const [aboutUsData, setAboutUsData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAboutPageData = async () => {
      try {
        setIsLoading(true); // Show the loader
        const { data } = await fatchAboutData();
        setAboutUsData(data);
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false); // Hide the loader
      }
    };

    fetchAboutPageData();
  }, []);

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
      <Intro introData={aboutUsData?.about} />
      <CountsSection countsData={topCounts} />
      <WhyChooseSection whyChooseData={whyChoose} />
      <Mission missionData={aboutUsData?.mission} />
      <Vision visionData={aboutUsData?.vision} />
      <Founder founderData={aboutUsData?.founder} />
      <TeamList teamData={aboutUsData?.team} teamInfo={team} />
      <ContactSection />
      <FAQSection />
    </>
  );
};

export default About;
