import axios from "axios";
import { ApiUrl } from "./Api";

export const createCheckup = async (formData) => {
  const response = await axios.post(`${ApiUrl}/check-up/create`, formData, {
    withCredentials: true,
  });
  return response.data;
};

export const deleteCheckup = async (id) => {
  const response = await axios.get(`${ApiUrl}/check-up/delete?id=${id}`, {
    withCredentials: true,
  });
  return response.data;
};

export const fetchCheckup = async () => {
  const response = await axios.get(`${ApiUrl}/check-up/get-all`, {
    withCredentials: true,
  });
  return response.data.message;
};
