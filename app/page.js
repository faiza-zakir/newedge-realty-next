"use client";
import Head from "next/head";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import AboutSection from "./components/home/about-section/AboutSection";
import AppointmentSection from "./components/home/appointment-section/AppointmentSection";
import BannerVideo from "./components/home/banner-section/banner-video/BannerVideo";
import BannerForm from "./components/home/banner-section/banner-form/BannerForm";
import BlogSection from "./components/home/blog-section/BlogSection";
import ContactSection from "./components/home/contact-section/ContactSection";
import FAQSection from "./components/home/faq-section/FAQSection";
import TestimonialsSection from "./components/home/testimonials-section/TestimonialsSection";
import VideoTestimonialsSection from "./components/home/video-testimonials-section/VideoTestimonialsSection";
import ProjectSlider from "./components/home/project-slider/ProjectSlider";
import WhyChooseSection from "./components/home/why-choose-section/WhyChooseSection";
// data
import { homeData } from "./db/homeData";
import projectsData from "./db/projectsData";
import blogsData from "./db/blogsData";

const Home = () => {
  const {
    about,
    counts,
    appointment,
    whyChoose,
    testimonials,
    testimonialsVideo,
  } = homeData;
  const [residentialProjects, setResidentialProjects] = useState([]);
  const [commercialProjects, setCommercialProjects] = useState([]);

  useEffect(() => {
    const residentialData = projectsData?.filter(
      (project) => project?.property_type?.route === "residential"
    );
    const commercialData = projectsData?.filter(
      (project) => project?.property_type?.route === "commercial"
    );
    setResidentialProjects(residentialData);
    setCommercialProjects(commercialData);
  }, []);

  return (
    <>
      <Head>
        <title>
          Newedge Realty Affordable Housing | Property at Exciting Rates
        </title>
        <meta
          name="description"
          content="Prime commercial properties for sale, affordable housing options, and office spaces for rent with Newedge Realty! Get yours now!"
        />
      </Head>
      <BannerVideo />
      <section className="form_mobile_view mt-60">
        <Container>
          <BannerForm />
        </Container>
      </section>
      <AboutSection aboutData={about} countsData={counts} />
      <ProjectSlider
        tagLine="Discover"
        title="Residential Properties"
        link="/residential"
        projectsData={residentialProjects?.slice(0, 4)}
      />
      <AppointmentSection appointmentData={appointment} />
      <ProjectSlider
        tagLine="Discover"
        title="Commercial Properties"
        link="/residential"
        projectsData={commercialProjects?.slice(0, 4)}
      />
      <WhyChooseSection whyChooseData={whyChoose} />
      <TestimonialsSection testimonialsData={testimonials} />
      <VideoTestimonialsSection testimonialsData={testimonialsVideo} />
      <BlogSection blogData={blogsData?.slice(0, 5)} />
      <ContactSection />
      <FAQSection />
    </>
  );
};

export default Home;
