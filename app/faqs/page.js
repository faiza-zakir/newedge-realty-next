"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Banner from "../components/common/common-banner/CommonBanner";
import FaqsList from "../components/faqs/FaqsList";
// api
import { fetchFaqData } from "../apis/commonApi";
// img
import bannerImg from "../assets/banner/faqbanner.webp";

const Faq = () => {
  const [faqData, setFaqData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchFaqListData = async () => {
      try {
        setIsLoading(true); // Show the loader
        const { data } = await fetchFaqData();
        setFaqData(data);
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false); // Hide the loader
      }
    };

    fetchFaqListData();
  }, []);

  return (
    <div>
      <Head>
        <title>Commercial Property for Sale| Newedge Realty India| FAQs</title>
        <meta
          name="description"
          content="Got questions about buying commercial real estate? Our FAQs provide quick answers on property for sale, financing options, zoning regulations, and the purchasing process."
        />
      </Head>
      <Banner
        name="FAQ's"
        indexpage="Home"
        indexvisit="/"
        activepage="FAQ's"
        bgImg={bannerImg}
      />
      <FaqsList faqsData={faqData} isLoading={isLoading} />
    </div>
  );
};

export default Faq;
