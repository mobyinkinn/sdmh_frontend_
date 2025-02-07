import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchAwards = async () => {
  const response = await axios.get(`${ApiUrl}/awards/get-all`, {
    withCredentials: true,
  });
  return response.data.data; // Adjust based on actual API structure
};

export const deleteAward = async (id) => {
  const response = await axios.get(`${ApiUrl}/awards/delete?id=${id}`, {
    withCredentials: true,
  });
  return response.data;
};

export const updateAward = async ({ id, data }) => {
  const response = await axios.post(`${ApiUrl}/awards/update?id=${id}`, data, {
    withCredentials: true,
  });
  return response.data;
};

export const updateAwardImage = async ({ id, data }) => {
  const response = await axios.post(
    `${ApiUrl}/awards/update-image?id=${id}`,
    data,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const createAward = async (data) => {
  const response = await axios.post(`${ApiUrl}/awards/create`, data, {
    withCredentials: true,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const fetchAwardById = async (id) => {
  const response = await axios.get(`${ApiUrl}/awards/get-by-id?_id=${id}`, {
    withCredentials: true,
  });
  return response.data.message;
};

export const updateBanner = async ({ id, data }) => {
  const response = await axios.post(
    `${ApiUrl}/awards/update-banner?id=${id}`,
    data,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const updateMultiImagesFromAward = async ({ id, images }) => {
  const response = await axios.post(
    `${ApiUrl}/awards/update-images?id=${id}`,
    images,
    {
      withCredentials: true,
    }
  );
  return response.data;
};
