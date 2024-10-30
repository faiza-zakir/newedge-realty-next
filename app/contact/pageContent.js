"use client";
import Banner from "../components/common/common-banner/CommonBanner";
import ContactInfoSection from "../components/contact/contact-info-section/ContactInfoSection";
import ContactFormSection from "../components/contact/contact-form-section/ContactFormSection";
import FAQSection from "../components/home/faq-section/FAQSection";
// img
import bannerImg from "../assets/banner/contactbanner.webp";

const PageContent = () => {
  return (
    <>
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
    </>
  );
};

export default PageContent;
