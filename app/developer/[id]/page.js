import PageContent from "./pageContent";
import { fatchDeveloperSingle } from "../../apis/commonApi";

export async function generateMetadata({ params }) {
  const { id } = params;
  const { data: singleDeveloper } = await fatchDeveloperSingle(id);
  return {
    title:
      singleDeveloper?.seo?.meta_title ||
      "Newedge Property Management Services",
    description:
      singleDeveloper?.seo?.meta_description ||
      "Newedge, is your trusted real estate agency specializing in property management. We maximize your property's value with tailored solutions and exceptional service.",
  };
}

const DeveloperInner = () => {
  return <PageContent />;
};

export default DeveloperInner;
