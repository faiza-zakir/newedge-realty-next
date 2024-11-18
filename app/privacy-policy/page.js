import { fatchPagesContent } from "../apis/commonApi";
import PageContentData from "./pageContent";
// Generate metadata for the page
export async function generateMetadata() {
  const { data } = await fatchPagesContent("privacy-policy");

  return {
    title:
      data?.content?.seo?.meta_title ||
      "Privacy Policy | NewEdge Realty - Your Data, Our Priority",
    description:
      data?.content?.seo?.meta_description ||
      "Learn about NewEdge Realty's privacy policy and how we protect your personal data. We value your privacy and ensure secure real estate transactions.",
  };
}

const PrivacyPolicy = () => {
  return (
    <div>
      <PageContentData />
    </div>
  );
};
export default PrivacyPolicy;
