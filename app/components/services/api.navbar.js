import axios from "axios";
import { ApiUrl } from "./Api";

export const createNavbar = async (formData) => {
  const response = await axios.post(`${ApiUrl}/navbar/create`, formData, {
    withCredentials: true,
  });
  return response.data;
};

export const deleteNavbar = async (id) => {
  const response = await axios.get(`${ApiUrl}/navbar/delete?id=${id}`, {
    withCredentials: true,
  });
  return response.data;
};

export const fetchNavbar = async () => {
  const response = await axios.get(`${ApiUrl}/navbar/get-all`, {
    withCredentials: true,
  });
  return response.data.message;
};

export const updateNavbar = async ({ id, formData }) => {
  const response = await axios.post(
    `${ApiUrl}/navbar/update?id=${id}`,
    formData,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const fetchNavbarById = async (id) => {
  const response = await axios.get(`${ApiUrl}/navbar/get-by-id?_id=${id}`, {
    withCredentials: true,
  });
  return response.data.message;
};
