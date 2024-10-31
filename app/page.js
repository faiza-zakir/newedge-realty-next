"use client";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import TaglinePopup from "./components/common/tagline-popup/TaglinePopup";
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

const Home = () => {
  const {
    about,
    counts,
    appointment,
    whyChoose,
    testimonials,
    testimonialsVideo,
  } = homeData;
  const [showModal, setShowModal] = useState(false);
  const [residentialProjects, setResidentialProjects] = useState([]);
  const [commercialProjects, setCommercialProjects] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000); // 3 seconds delay

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  const handleModalClose = () => setShowModal(false);

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
      <TaglinePopup show={showModal} handleClose={handleModalClose} />
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
      <BlogSection />
      <ContactSection />
      <FAQSection />
    </>
  );
};

export default Home;
