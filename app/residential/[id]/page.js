import ProjectsInner from "../../components/projectInner/ProjectsInner";

export default function ResidentialInner() {
  return <ProjectsInner />;
}

// import ProjectsInner from "../../components/projectInner/ProjectsInner";
// import projectsData from "../../db/projectsData";

// export default function ResidentialInner({ singleProject }) {
//   return <ProjectsInner singleProject={singleProject} />;
// }

// // Static Params for Commercial Project Pages
// export function generateStaticParams() {
//   // Get all possible commercial project routes
//   const paths = projectsData
//     .filter((project) => project.property_type.route === "commercial")
//     .map((project) => ({
//       params: { id: project.route },
//     }));

//   return {
//     paths,
//     fallback: false, // No fallback for missing pages
//   };
// }

// // Static Props to Fetch Commercial Project Data Based on Route
// export async function generateStaticProps({ params }) {
//   const { id } = params;
//   // Fetch the commercial project details by route
//   const singleProject = projectsData.find((project) => project.route === id);

//   return {
//     props: {
//       singleProject,
//     },
//   };
// }
