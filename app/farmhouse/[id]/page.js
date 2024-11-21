import ProjectsInner from "../../components/projectInner/ProjectsInner";

export async function generateMetadata({ params }) {
  const { id } = params;
  return {
    title: "Newedge Property Management Services",
    description:
      "Newedge, is your trusted real estate agency specializing in property management. We maximize your property's value with tailored solutions and exceptional service.",
    alternates: {
      canonical: "https://newedge-realty-next.vercel.app/farmhouse",
    },
  };
}

export default function FarmHouseInner() {
  return <ProjectsInner />;
}
