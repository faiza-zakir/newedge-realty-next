import ProjectsInner from "../../components/projectInner/ProjectsInner";
import { fatchProjectSingle } from "../../apis/commonApi";

export async function generateMetadata({ params }) {
  const { id } = params;
  const { data: singleProject } = await fatchProjectSingle(id);
  return {
    title:
      singleProject?.seo?.meta_title || "Newedge Property Management Services",
    description:
      singleProject?.seo?.meta_description ||
      "Newedge, is your trusted real estate agency specializing in property management. We maximize your property's value with tailored solutions and exceptional service.",
  };
}

export default function FarmHouseInner() {
  return <ProjectsInner />;
}
