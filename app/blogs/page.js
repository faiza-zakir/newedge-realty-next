"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Banner from "../components/common/common-banner/CommonBanner";
import BlogList from "../components/blog/BlogList";
import ContactSection from "../components/home/contact-section/ContactSection";
import FAQSection from "../components/home/faq-section/FAQSection";
// api
import { fetchBlogData } from "../apis/commonApi";
// img
import bannerImg from "../assets/banner/blogbanner.webp";

const Blog = () => {
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
    <div>
      <Head>
        <title>Real Estate Market Trends & Analysis | Newedge Blog</title>
        <meta
          name="description"
          content="Stay updated with real estate blogs on market trends, in-depth analysis, and expert insights. Get valuable tips to navigate the property landscape with Newedge."
        />
      </Head>
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
    </div>
  );
};

export default Blog;
