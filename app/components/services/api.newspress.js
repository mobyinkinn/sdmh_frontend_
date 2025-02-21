import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchNewspress = async () => {
  const response = await axios.get(`${ApiUrl}/newspress/get-all`, {
    withCredentials: true,
  });
  return response.data.message;
};

export const createNewspress = async (formData) => {
  const response = await axios.post(`${ApiUrl}/newspress/create`, formData, {
    withCredentials: true,
  });
  return response.data;
};

export const updateNewspress = async ({ id, formData }) => {
  const response = await axios.post(
    `${ApiUrl}/newspress/update?id=${id}`,
    formData,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const deleteNewspress = async (id) => {
  const response = await axios.get(`${ApiUrl}/newspress/delete?id=${id}`, {
    withCredentials: true,
  });
  return response.data;
};

export const updateImage = async ({ id, data }) => {
  const response = await axios.post(
    `${ApiUrl}/newspress/update-image?id=${id}`,
    data,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const updateBanner = async ({ id, data }) => {
  const response = await axios.post(
    `${ApiUrl}/newspress/update-banner?id=${id}`,
    data,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const fetchNewspressById = async (id) => {
  const response = await axios.get(`${ApiUrl}/newspress/get-by-id?id=${id}`, {
    withCredentials: true,
  });
  return response.data.message;
};
