"use client";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Banner from "../../components/common/common-banner/CommonBanner";
import Details from "../../components/blogInner/Details/Details";
import RelatedBlogs from "../../components/blogInner/related-blogs/RelatedBlogs";
import ContactSection from "../../components/home/contact-section/ContactSection";
import FAQSection from "../../components/home/faq-section/FAQSection";
// api
import { fetchBlogData, fetchBlogDeatilsData } from "../../apis/commonApi";
import blogsData from "../../db/blogsData";
// img
import bannerImg from "../../assets/banner/blogbanner.webp";

const BlogInner = () => {
  const { id } = useParams();
  const [singleBlog, setSingleBlog] = useState({});
  const [relatedBlog, setRelatedBlog] = useState(blogsData);
  const [isLoading, setIsLoading] = useState(false);

  // const fetchBlogListData = async () => {
  //   try {
  //     setIsLoading(true); // Show the loader

  //     const { data } = await fetchBlogData();
  //     const relBlogData = data?.filter((item) => item?.id !== id);
  //     setRelatedBlog(relBlogData);
  //   } catch (error) {
  //     console.error("Error fetching Data:", error);
  //   } finally {
  //     setIsLoading(false); // Hide the loader
  //   }
  // };

  // const fetchSingleBlogData = async () => {
  //   try {
  //     setIsLoading(true); // Show the loader

  //     const { data } = await fetchBlogDeatilsData(id);
  //     setSingleBlog(data);
  //   } catch (error) {
  //     console.error("Error fetching Data:", error);
  //   } finally {
  //     setIsLoading(false); // Hide the loader
  //   }
  // };

  // useEffect(() => {
  //   fetchBlogListData();
  //   fetchSingleBlogData();
  // }, [id]);

  useEffect(() => {
    setSingleBlog(blogsData?.find((x) => x?.id == id));
    setRelatedBlog(blogsData?.filter((x) => x?.id !== id));
  }, [id, blogsData]);

  return (
    <div>
      <Head>
        <title>{singleBlog?.seo?.meta_title ?? "Blog | NewEdge Realty"}</title>
        <meta
          name="description"
          content={singleBlog?.seo?.meta_description ?? "Description"}
        />
      </Head>
      <Banner
        name=""
        indexpage="Home"
        indexvisit="/"
        activepage={singleBlog?.title}
        bgImg={bannerImg}
      />
      <Details singleBlog={singleBlog} />
      <RelatedBlogs blogData={relatedBlog} />
      <ContactSection />
      <FAQSection />
    </div>
  );
};

export default BlogInner;
