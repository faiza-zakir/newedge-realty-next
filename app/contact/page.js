"use client";
import Head from "next/head";
import Banner from "../components/common/common-banner/CommonBanner";
import ContactInfoSection from "../components/contact/contact-info-section/ContactInfoSection";
import ContactFormSection from "../components/contact/contact-form-section/ContactFormSection";
import FAQSection from "../components/home/faq-section/FAQSection";
// img
import bannerImg from "../assets/banner/contactbanner.webp";

const Contact = () => {
  return (
    <div>
      <Head>
        <title>
          Contact real estate agents India| Newedge Realty| Property India
        </title>
        <meta
          name="description"
          content="Contact Newedge real estate agents India for reliable real estate services in India. Connect with experienced agents and offices to efficiently buy, sell, or rent properties."
        />
      </Head>
      <Banner
        name="Contact Us"
        indexpage="Home"
        indexvisit="/"
        activepage="Contact Us"
        bgImg={bannerImg}
      />
      <ContactInfoSection />
      <ContactFormSection />
      <FAQSection />
    </div>
  );
};

export default Contact;
