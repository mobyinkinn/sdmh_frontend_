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
  });
  return response.data;
};

export const updateImage = async ({ id, data }) => {
  const response = await axios.post(
    `${ApiUrl}/checkup/update-image?id=${id}`,
    data,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const updateBanner = async ({ id, data }) => {
  const response = await axios.post(
    `${ApiUrl}/checkup/update-banner?id=${id}`,
    data,
    {
      withCredentials: true,
    }
  );
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

export const fetchCheckupById = async (id) => {
  const response = await axios.get(`${ApiUrl}/checkup/get-by-id?_id=${id}`, {
    withCredentials: true,
  });
  return response.data.message;
};

export const updateMultiImagesFromCheckup = async ({ id, images }) => {
  const response = await axios.post(
    `${ApiUrl}/checkup/update-images?id=${id}`,
    images,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const removeMultiImageFromCheckup = async ({ id, data }) => {
  const response = await axios.post(
    `${ApiUrl}/checkup/delete-image?id=${id}`,
    data,
    {
      withCredentials: true,
    }
  );
  return response.data;
};
