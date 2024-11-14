import PageContent from "./pageContent";
import { fetchBlogData, fetchBlogDeatilsData } from "../../apis/commonApi";

export async function generateMetadata({ params }) {
  const { id } = params;
  return {
    title: "Newedge Property Management Services",
    description:
      "Newedge, is your trusted real estate agency specializing in property management. We maximize your property's value with tailored solutions and exceptional service.",
  };
}

// export async function generateStaticParams() {
//   try {
//     const response = await fetchBlogData();

//     const paths = response?.data.map((item) => ({
//       id: item.route.toString(), // Ensure the id is a string
//     }));

//     return paths;
//   } catch (error) {
//     console.error("Error generating static params:", error);
//     return []; // Return an empty array if the API call fails
//   }
// }

const BlogInner = () => {
  return <PageContent />;
};

export default BlogInner;
export const dynamicParams = false;
