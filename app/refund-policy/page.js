import Banner from "../components/common/common-banner/CommonBanner";
import RefundIntro from "../components/common/refund-intro/RefundIntro";
// img
import bannerImg from "../assets/banner/refundbanner.webp";

// Generate metadata for the page
export async function generateMetadata() {
  return {
    title: "Refund Policy | NewEdge Realty - Hassle-Free Real Estate Services",
    description:
      "Discover NewEdge Realty's clear and transparent refund policy. Learn how we ensure a seamless experience in real estate services, prioritizing customer satisfaction.",
  };
}

const RefundPolicy = () => {
  return (
    <div>
      <Banner
        name="Cancellation & Refund Policy"
        indexpage="Home"
        indexvisit="/"
        activepage="Cancellation & Refund Policy"
        bgImg={bannerImg}
      />
      <RefundIntro />
    </div>
  );
};
export default RefundPolicy;
