// "use client";
// import Head from "next/head";
// import { useState, useEffect } from "react";
// import { useParams } from "next/navigation";
// import Banner from "../../components/common/common-banner/CommonBanner";
// import Overview from "../../components/developerInner/overview/Overview";
// import PortfolioSlider from "../../components/developerInner/portfolio-slider/PortfolioSlider";
// import ContactSection from "../../components/home/contact-section/ContactSection";
// import FAQSection from "../../components/home/faq-section/FAQSection";
// // data
// import developersData from "../../db/developersData";
// // img
// import bannerImg from "../../assets/banner/developerinnerbanner.webp";

// const DevelopersInner = () => {
//   const { id } = useParams();
//   const [singleDeveloper, setSingleDeveloper] = useState({});

//   useEffect(() => {
//     const developerDetails = developersData?.find(
//       (developer) => developer?.route === id
//     );
//     setSingleDeveloper(developerDetails);
//   }, [id]);

//   return (
//     <div>
//       <Head>
//         <title>
//           {singleDeveloper?.seo?.meta_title ??
//             "Residential Inner | NewEdge Realty"}
//         </title>
//         <meta
//           name="description"
//           content={singleDeveloper?.seo?.meta_description ?? "Description"}
//         />
//       </Head>
//       <Banner
//         name=""
//         indexpage="Home"
//         indexvisit="/"
//         activepage={singleDeveloper?.title}
//         bgImg={bannerImg}
//       />
//       <Overview singleDeveloper={singleDeveloper} />
//       <PortfolioSlider sliderData={singleDeveloper?.related_projects} />
//       <ContactSection />
//       <FAQSection />
//     </div>
//   );
// };

// export default DevelopersInner;

// DevelopersInner.js
import Head from "next/head";
import Banner from "../../components/common/common-banner/CommonBanner";
import Overview from "../../components/developerInner/overview/Overview";
import PortfolioSlider from "../../components/developerInner/portfolio-slider/PortfolioSlider";
import ContactSection from "../../components/home/contact-section/ContactSection";
import FAQSection from "../../components/home/faq-section/FAQSection";
import developersData from "../../db/developersData";
import bannerImg from "../../assets/banner/developerinnerbanner.webp";

// DevelopersInner Component
const DevelopersInner = ({ singleDeveloper }) => {
  return (
    <div>
      <Head>
        <title>
          {singleDeveloper?.seo?.meta_title ??
            "Residential Inner | NewEdge Realty"}
        </title>
        <meta
          name="description"
          content={singleDeveloper?.seo?.meta_description ?? "Description"}
        />
      </Head>
      <Banner
        name=""
        indexpage="Home"
        indexvisit="/"
        activepage={singleDeveloper?.title}
        bgImg={bannerImg}
      />
      <Overview singleDeveloper={singleDeveloper} />
      <PortfolioSlider sliderData={singleDeveloper?.related_projects} />
      <ContactSection />
      <FAQSection />
    </div>
  );
};

export default DevelopersInner;

// Generate Static Paths for Dynamic Developer Pages
export function generateStaticParams() {
  const paths = developersData.map((developer) => ({
    params: { id: developer.route },
  }));

  return {
    paths,
    fallback: false,
  };
}

// Static Props
export async function generateStaticProps({ params }) {
  const { id } = params;
  const singleDeveloper = developersData.find(
    (developer) => developer.route === id
  );

  return {
    props: {
      singleDeveloper,
    },
  };
}
