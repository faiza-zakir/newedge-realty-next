"use client";
import { useState, useEffect } from "react";
import Banner from "../components/common/common-banner/CommonBanner";
import FaqsList from "../components/faqs/FaqsList";
// api
import { fetchFaqData } from "../apis/commonApi";
// img
import bannerImg from "../assets/banner/faqbanner.webp";

const PageContent = () => {
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
    <>
      <Banner
        name="FAQ's"
        indexpage="Home"
        indexvisit="/"
        activepage="FAQ's"
        bgImg={bannerImg}
      />
      <FaqsList faqsData={faqData} isLoading={isLoading} />
    </>
  );
};

export default PageContent;
