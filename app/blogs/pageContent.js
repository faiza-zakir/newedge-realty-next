"use client";
import { useState, useEffect } from "react";
import Banner from "../components/common/common-banner/CommonBanner";
import BlogList from "../components/blog/BlogList";
import ContactSection from "../components/home/contact-section/ContactSection";
import FAQSection from "../components/home/faq-section/FAQSection";
// api
import { fetchBlogData } from "../apis/commonApi";
// img
import bannerImg from "../assets/banner/blogbanner.webp";

const PageContent = () => {
  const [blogData, setBlogData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchBlogListData = async () => {
      try {
        setIsLoading(true); // Show the loader

        const { data } = await fetchBlogData();
        setBlogData(data);
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false); // Hide the loader
      }
    };

    fetchBlogListData();
  }, []);

  return (
    <>
      <Banner
        name="Blogs"
        indexpage="Home"
        indexvisit="/"
        activepage="Blogs"
        bgImg={bannerImg}
      />
      <BlogList blogsList={blogData} isLoading={isLoading} />
      <ContactSection />
      <FAQSection />
    </>
  );
};

export default PageContent;
