import Banner from "../components/common/common-banner/CommonBanner";
import TermsIntro from "../components/common/terms-intro/TermsIntro";
// img
import bannerImg from "../assets/banner/termsbanner.webp";

// Generate metadata for the page
export async function generateMetadata() {
  return {
    title:
      "Terms and Conditions | NewEdge Realty - Trusted Real Estate Partner",
    description:
      "Read NewEdge Realty's terms and conditions. We offer a trustworthy and transparent real estate service that puts your interests first in every transaction.",
  };
}

const TermsCondition = () => {
  return (
    <div>
      <Banner
        name="Terms & Condition"
        indexpage="Home"
        indexvisit="/"
        activepage="Terms & Condition"
        bgImg={bannerImg}
      />
      <TermsIntro />
    </div>
  );
};
export default TermsCondition;
