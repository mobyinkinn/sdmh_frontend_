import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchCheckup = async () => {
  const response = await axios.get(`${ApiUrl}/checkup/get-all`, {
    withCredentials: true,
  });
  return response.data.message; // Adjust based on actual API structure
};

export const deleteCheckup = async (id) => {
  const response = await axios.get(`${ApiUrl}/checkup/delete?id=${id}`, {
    withCredentials: true,
  });
  return response.data;
};
export const blockCheckup = async (id) => {
  const response = await axios.patch(
    `${ApiUrl}/checkup/block-checkup?id=${id}`,
    {},
    { withCredentials: true }
  );
  return response.data;
};

export const unblockCheckup = async (id) => {
  const response = await axios.patch(
    `${ApiUrl}/checkup/unblock-checkup?id=${id}`,
    {},
    { withCredentials: true }
  );
  return response.data;
};
export const updateCheckup = async ({ id, data }) => {
  const response = await axios.post(`${ApiUrl}/checkup/update?id=${id}`, data, {
    withCredentials: true,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const createCheckup = async (data) => {
  const response = await axios.post(`${ApiUrl}/checkup/create`, data, {
    withCredentials: true,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
