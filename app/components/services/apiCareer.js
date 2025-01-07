import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchCareers = async () => {
  const response = await axios.get(`${ApiUrl}/careers/get-all`, {
    withCredentials: true,
  });
  return response.data.message; // Adjust based on actual API structure
};
export const deleteCareers = async (id) => {
  const response = await axios.get(`${ApiUrl}/careers/delete?id=${id}`, {
    withCredentials: true,
  });
  return response.data;
};
export const blockCareers = async (id) => {
  const response = await axios.patch(
    `${ApiUrl}/careers/block-careers?id=${id}`,
    {},
    { withCredentials: true }
  );
  return response.data;
};

export const unblockCareers = async (id) => {
  const response = await axios.patch(
    `${ApiUrl}/careers/unblock-careers?id=${id}`,
    {},
    { withCredentials: true }
  );
  return response.data;
};

export const createData = async (data) => {
  const response = await axios.post(`${ApiUrl}/careers/create`, data, {
    withCredentials: true,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
