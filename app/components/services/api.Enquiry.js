import axios from "axios";
import { ApiUrl } from "./Api";


export const createEnquiry = async (formData) => {
  const response = await axios.post(`${ApiUrl}/enquiry/create`, formData, {
    withCredentials: true,
  });
  return response.data;
};

export const deleteEnquiry = async (id) => {
  const response = await axios.get(`${ApiUrl}/enquiry/delete?id=${id}`, {
    withCredentials: true,
  });
  return response.data;
};
export const fetchEnquiry = async () => {
  const response = await axios.get(`${ApiUrl}/enquiry/get-all`, {
    withCredentials: true,
  });
  return response.data.message; // Adjust based on actual API structure
};