import ProjectsInner from "../../components/projectInner/ProjectsInner";
import { fatchProjectList, fatchProjectSingle } from "../../apis/commonApi";

export async function generateMetadata({ params }) {
  const { id } = params;
  return {
    title: "Newedge Property Management Services",
    description:
      "Newedge, is your trusted real estate agency specializing in property management. We maximize your property's value with tailored solutions and exceptional service.",
  };
}

export async function generateStaticParams() {
  // Fetch a list of all possible 'id' values you want to pre-render
  const response = await fatchProjectList(); // Your API call or data fetching logic

  // Assuming commercialData is an array of items, each with an 'id' field
  return response?.data.map((item) => ({
    id: item.route.toString(), // Ensure the id is a string
  }));
}

export default function PreLeasedInner() {
  return <ProjectsInner />;
}
export const dynamicParams = false;
