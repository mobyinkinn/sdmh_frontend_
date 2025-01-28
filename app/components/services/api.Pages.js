import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchPages = async () => {
  const response = await axios.get(`${ApiUrl}/pages/get-all`, {
    withCredentials: true,
  });
  return response.data.data;
};

export const deletePage = async (id) => {
  const response = await axios.get(`${ApiUrl}/pages/delete?id=${id}`, {
    withCredentials: true,
  });
  return response.data;
};

export const updatePage = async ({ data, id }) => {
  const response = await axios.post(`${ApiUrl}/pages/update?id=${id}`, data, {
    withCredentials: true,
  });

  return response.data;
};

export const createPage = async (data) => {
  const response = await axios.post(`${ApiUrl}/pages/create`, data, {
    withCredentials: true,
  });

  return response.data;
};
