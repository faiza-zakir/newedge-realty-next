"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import { useParams } from "next/navigation";
import AboutDeveloper from "../../components/projectInner/about-developer/AboutDeveloper";
import Banner from "../../components/common/common-banner/CommonBanner";
import Overview from "../../components/projectInner/Overview/Overview";
import ProjectVideo from "../../components/projectInner/project-video/ProjectVideo";
// import ProjectSlider from "../../components/projectInner/project-slider/ProjectSlider";
import Details from "../../components/projectInner/details/Details";
import MoreDetails from "../../components/projectInner/more-details/MoreDetails";
import ProjectGallery from "../../components/projectInner/project-gallery/ProjectGallery";
import ContactSection from "../../components/home/contact-section/ContactSection";
import FAQSection from "../../components/home/faq-section/FAQSection";
// api
import { fatchProjectSingle } from "../../apis/commonApi";
// data
// import projectsData from "../../db/projectsData";
// img
import bannerImg from "../../assets/banner/contactbanner.webp";

const ProjectsInner = () => {
  const { id } = useParams();
  const [singleProject, setSingleProject] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSingleProjectData = async () => {
      try {
        setIsLoading(true); // Show the loader
        const { data } = await fatchProjectSingle(id);
        setSingleProject(data);
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false); // Hide the loader
      }
    };
    fetchSingleProjectData();
  }, [id]);

  return (
    <div>
      <Head>
        <title>
          {singleProject?.seo?.meta_title ??
            "Residential Inner | NewEdge Realty"}
        </title>
        <meta
          name="description"
          content={singleProject?.seo?.meta_description ?? "Description"}
        />
      </Head>
      <Banner
        name=""
        indexpage="Home"
        indexvisit="/"
        activepage={singleProject?.title}
        bgImg={
          singleProject?.property_type?.banner_image
            ? singleProject?.property_type?.banner_image
            : bannerImg
        }
      />
      <Overview singleProject={singleProject} />
      <ProjectVideo projectVideo={singleProject?.video_url} />
      {/* <ProjectSlider sliderData={singleProject?.slider_image} /> */}
      <Details singleProject={singleProject} />
      <MoreDetails
        title="Key Details"
        featuresData={singleProject?.key_details}
      />
      <ProjectGallery galleryData={singleProject?.gallery_image} />
      {singleProject?.amenities?.length > 0 && (
        <MoreDetails
          title="Amenities"
          featuresData={singleProject?.amenities}
        />
      )}
      <AboutDeveloper developerData={singleProject?.developer} />
      <ContactSection />
      <FAQSection />
    </div>
  );
};

export default ProjectsInner;

// import Head from "next/head";
// import Banner from "../../components/common/common-banner/CommonBanner";
// import Overview from "../../components/projectInner/Overview/Overview";
// import ProjectVideo from "../../components/projectInner/project-video/ProjectVideo";
// import Details from "../../components/projectInner/details/Details";
// import MoreDetails from "../../components/projectInner/more-details/MoreDetails";
// import ProjectGallery from "../../components/projectInner/project-gallery/ProjectGallery";
// import AboutDeveloper from "../../components/projectInner/about-developer/AboutDeveloper";
// import ContactSection from "../../components/home/contact-section/ContactSection";
// import FAQSection from "../../components/home/faq-section/FAQSection";
// import bannerImg from "../../assets/banner/contactbanner.webp";

// // ProjectsInner Component
// const ProjectsInner = ({ singleProject }) => {
//   return (
//     <div>
//       <Head>
//         <title>
//           {singleProject?.seo?.meta_title ??
//             "Residential Inner | NewEdge Realty"}
//         </title>
//         <meta
//           name="description"
//           content={singleProject?.seo?.meta_description ?? "Description"}
//         />
//       </Head>
//       <Banner
//         name=""
//         indexpage="Home"
//         indexvisit="/"
//         activepage={singleProject?.title}
//         bgImg={
//           singleProject?.property_type?.banner_image
//             ? singleProject?.property_type?.banner_image
//             : bannerImg
//         }
//       />
//       <Overview singleProject={singleProject} />
//       <ProjectVideo />
//       {/* <ProjectSlider sliderData={singleProject?.slider_image} /> */}
//       <Details singleProject={singleProject} />
//       <MoreDetails
//         title="Key Details"
//         featuresData={singleProject?.key_details}
//       />
//       <ProjectGallery galleryData={singleProject?.gallery_image} />
//       <MoreDetails title="Amenities" featuresData={singleProject?.amenities} />
//       <AboutDeveloper developerData={singleProject?.developer} />
//       <ContactSection />
//       <FAQSection />
//     </div>
//   );
// };

// export default ProjectsInner;
