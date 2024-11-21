import PageContent from "./pageContent";

export async function generateMetadata() {
  return {
    title: "Newedge Property Management Services",
    description:
      "Newedge, is your trusted real estate agency specializing in property management. We maximize your property's value with tailored solutions and exceptional service.",
    alternates: {
      canonical: "https://newedge-realty-next.vercel.app/developers",
    },
  };
}

const DeveloperInner = () => {
  return <PageContent />;
};

export default DeveloperInner;
