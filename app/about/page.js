import PageContent from "./pageContent";
import { fatchAboutData } from "../apis/commonApi";

export async function generateMetadata() {
  const { data: aboutUsData } = await fatchAboutData();
  return {
    title:
      aboutUsData?.seo?.meta_title ||
      "Newedge Property Management Services | Trusted Real Estate Agency",
    description:
      aboutUsData?.seo?.meta_description ||
      "Newedge, is your trusted real estate agency specializing in property management. We maximize your property's value with tailored solutions and exceptional service.",
  };
}

const About = () => {
  return <PageContent />;
};

export default About;
