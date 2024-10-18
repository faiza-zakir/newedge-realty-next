"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Banner from "../components/common/common-banner/CommonBanner";
import FilterSection from "../components/developers/filter-section/FilterSection";
import DevelopersList from "../components/developers/developers-list/DevelopersList";
import ContactSection from "../components/home/contact-section/ContactSection";
import FAQSection from "../components/home/faq-section/FAQSection";
// data
import developersData from "../db/developersData";
// img
import bannerImg from "../assets/banner/developerbanner.webp";

const Developers = () => {
  const [developerData, setDeveloperData] = useState([]);

  useEffect(() => {
    setDeveloperData(developersData);
  }, [developersData]);

  return (
    <>
      <Head>
        <title>
          Trusted Real Estate & Property Developers | Newedge Realty India
        </title>
        <meta
          name="description"
          content="One-stop-shop for innovative projects and expertly crafted properties tailored to your residential and commercial needs. Newedge Realty."
        />
      </Head>
      <Banner
        name="Developers"
        indexpage="Home"
        indexvisit="/"
        activepage="Developers"
        bgImg={bannerImg}
      />
      <FilterSection />
      <DevelopersList developerList={developerData} />
      <ContactSection />
      <FAQSection />
    </>
  );
};

export default Developers;
