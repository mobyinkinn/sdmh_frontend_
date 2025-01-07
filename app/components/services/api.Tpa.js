import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchTpa = async () => {
  const response = await axios.get(`${ApiUrl}/tpa/get-all`, {
    withCredentials: true,
  });
  return response.data.message; // Adjust based on actual API structure
};

export const deleteTpa = async (id) => {
  const response = await axios.get(`${ApiUrl}/tpa/delete?id=${id}`, {
    withCredentials: true,
  });
  return response.data;
};
export const blockTpa = async (id) => {
  const response = await axios.patch(
    `${ApiUrl}/tpa/block-tpa?id=${id}`,
    {},
    { withCredentials: true }
  );
  return response.data;
};

export const unblockTpa = async (id) => {
  const response = await axios.patch(
    `${ApiUrl}/tpa/unblock-tpa?id=${id}`,
    {},
    { withCredentials: true }
  );
  return response.data;
};

export const updateTpa = async ({ id, data }) => {
  const response = await axios.post(`${ApiUrl}/tpa/update?id=${id}`, data, {
    withCredentials: true,
  });
  return response.data;
};

export const createTpa = async (data) => {
  const response = await axios.post(`${ApiUrl}/tpa/create`, data, {
    withCredentials: true,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const updateLogo = async ({ formdata, id }) => {
  const response = await axios.post(
    `${ApiUrl}/tpa/update-logo?id=${id}`,
    formdata,
    {
      withCredentials: true,
    }
  );

  return res.data;
};
