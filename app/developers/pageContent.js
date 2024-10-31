"use client";
import { useState, useEffect } from "react";
import Banner from "../components/common/common-banner/CommonBanner";
import FilterSection from "../components/developers/filter-section/FilterSection";
import DevelopersList from "../components/developers/developers-list/DevelopersList";
import ContactSection from "../components/home/contact-section/ContactSection";
import FAQSection from "../components/home/faq-section/FAQSection";
// api
import { fatchDeveloperList } from "../apis/commonApi";
// img
import bannerImg from "../assets/banner/developerbanner.webp";

const PageContent = () => {
  const [developerData, setDeveloperData] = useState([]);
  const [filters, setFilters] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true); // Show the loader
        const { data } = await fatchDeveloperList();
        setDeveloperData(data);
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false); // Hide the loader
      }
    };

    fetchData();
  }, []);

  // Function to update filters based on user input
  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters, // Update only the changed filters (zone, location, type)
    }));
  };

  // Apply filters to the developer list
  const filteredDevelopers = developerData?.filter((dev) => {
    // Check for Developer filter
    if (filters?.developer && dev?.route !== filters?.developer) return false;

    return true;
  });

  return (
    <>
      <Banner
        name="Developers"
        indexpage="Home"
        indexvisit="/"
        activepage="Developers"
        bgImg={bannerImg}
      />
      <FilterSection
        developerList={developerData}
        onFilterChange={handleFilterChange}
      />
      <DevelopersList
        developerList={filteredDevelopers}
        isLoading={isLoading}
      />
      <ContactSection />
      <FAQSection />
    </>
  );
};

export default PageContent;