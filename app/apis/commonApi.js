import API from "./config";

// Lead Form

export const postLeadForm = (formData) => {
  return API.post("/forms", formData);
};

// Project Inner API

export const postDeveloperContact = (formData) => {
  return API.post("/developer-contact-form", formData);
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

export const fatchDeveloperList = () => {
  return API.get("/developers");
};
export const fatchDeveloperSingle = (id) => {
  return API.get(`/developers/${id}`);
};
