"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import { usePathname } from "next/navigation";
import Banner from "../../components/common/common-banner/CommonBanner";
import FilterSection from "../../components/projects/filter-section/FilterSection";
import ProjectsList from "../../components/projects/projects-list/ProjectsList";
import ContactSection from "../../components/home/contact-section/ContactSection";
import FAQSection from "../../components/home/faq-section/FAQSection";
// data
import projectsData from "../../db/projectsData";
// img
import bannerImg from "../../assets/banner/contactbanner.webp";

const Projects = () => {
  const pathname = usePathname();
  const route = pathname?.split("/")?.[1];
  const [projectData, setProjectData] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const projectsList = projectsData?.filter(
      (project) => project?.property_type?.route === route
    );
    setProjectData(projectsList);
  }, [pathname, route]);

  // Function to update filters based on user input
  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters, // Update only the changed filters (zone, location, type)
    }));
  };

  const formatPrice = (value) => {
    if (value >= 10000000) {
      return (value / 10000000).toFixed(1) + "Cr"; // Convert to crores
    } else if (value >= 100000) {
      return (value / 100000).toFixed(1) + "L"; // Convert to lakhs
    }
    return value;
  };

  // Apply filters to the project list
  const filteredProjects = projectData?.filter((project) => {
    // Check for location filter
    if (
      filters?.location &&
      project?.location?.zone?.route !== filters?.location
    )
      return false;
    // Check for price filter
    if (filters?.price && project?.price !== formatPrice(filters?.price))
      return false;

    return true;
  });

  return (
    <>
      <Head>
        <title>
          {projectData?.[0]?.property_type?.seo?.meta_title ??
            "Projects | NewEdge Realty"}
        </title>
        <meta
          name="description"
          content={
            projectData?.[0]?.property_type?.seo?.meta_description ??
            "Description"
          }
        />
      </Head>
      <Banner
        name={projectData?.[0]?.property_type?.title}
        indexpage="Home"
        indexvisit="/"
        activepage={projectData?.[0]?.property_type?.title}
        bgImg={
          projectData?.[0]?.property_type?.banner_image
            ? projectData?.[0]?.property_type?.banner_image
            : bannerImg
        }
      />
      <FilterSection onFilterChange={handleFilterChange} />
      <ProjectsList projectsData={filteredProjects} route={route} />
      <ContactSection />
      <FAQSection />
    </>
  );
};

export default Projects;
