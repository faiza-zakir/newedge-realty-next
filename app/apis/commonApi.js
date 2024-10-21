import API from "./config";

export const postLeadForm = (formData) => {
  return API.post("/forms", formData);
};

// Faqs API

export const fetchFaqData = () => {
  return API.get("/faqs");
};

// Blogs API

export const fetchBlogData = () => {
  return API.get("/blogs");
};

export const fetchBlogDeatilsData = (id) => {
  return API.get(`/blogs/${id}`);
};

// Testimonials API

export const fetchTestimonialData = () => {
  return API.get("/testimonials");
};

// Project Inner API

export const postDeveloperContact = (formData) => {
  return API.post("/developer-contact-form", formData);
};
