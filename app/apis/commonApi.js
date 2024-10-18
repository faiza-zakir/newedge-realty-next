import API from "./config";

export const postContactUs = (formData) => {
  return API.post("/contact", formData);
};

// Faqs API

export const fetchFaqData = () => {
  return API.get("/get-faqs");
};

// Blogs API

export const fetchBlogData = () => {
  return API.get("/blog");
};

export const fetchBlogDeatilsData = (id) => {
  return API.get(`/blog/${id}`);
};

// Testimonials API

export const fetchTestimonialData = () => {
  return API.get("/get-testimonials");
};
