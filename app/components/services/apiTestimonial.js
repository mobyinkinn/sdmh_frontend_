import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchTestimonials = async () => {
  const response = await axios.get(`${ApiUrl}/testimonials/get-all`, {
    withCredentials: true,
  });
  return response.data.message; // Adjust based on actual API structure
};
export const deleteTestimonial = async (id) => {
  const response = await axios.get(`${ApiUrl}/testimonials/delete?id=${id}`, {
    withCredentials: true,
  });
  return response.data;
};
export const blockTestimonial = async (id) => {
  const response = await axios.patch(
    `${ApiUrl}/testimonials/block-testimonial?id=${id}`,
    {},
    { withCredentials: true }
  );
  return response.data;
};

export const unblockTestimonial = async (id) => {
  const response = await axios.patch(
    `${ApiUrl}/testimonials/unblock-testimonial?id=${id}`,
    {},
    { withCredentials: true }
  );
  return response.data;
};

export const createTestimonial = async (formdata) => {
  const response = await axios.post(`${ApiUrl}/testimonials/create`, formdata, {
    withCredentials: true,
  });
  return response.data;
};
