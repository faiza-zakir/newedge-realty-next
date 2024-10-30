import Projects from "../components/projects/Projects";

// Generate metadata for the page
export async function generateMetadata() {
  return {
    title:
      "Pre-Leased Property for Sale | Secure Investment Opportunities | Newedge Realty",
    description:
      "Invest in high-return pre-leased properties with Newedge Realty. Call us today! Newedge Realty.",
  };
}

export default function PreLeased() {
  return <Projects />;
}
