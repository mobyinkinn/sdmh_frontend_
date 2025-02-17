import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchTeachings = async () => {
  const response = await axios.get(`${ApiUrl}/teachings/get-all`, {
    withCredentials: true,
  });
  return response.data.data; // Adjust based on actual API structure
};

export const blockTeachings = async (id) => {
  const response = await axios.patch(
    `${ApiUrl}/teachings/block-teaching?id=${id}`,
    {},
    { withCredentials: true }
  );
  return response.data;
};

export const unblockTeachings = async (id) => {
  const response = await axios.patch(
    `${ApiUrl}/teachings/unblock-teaching?id=${id}`,
    {},
    { withCredentials: true }
  );
  return response.data.data;
};

export const deleteTeachings = async (id) => {
  const response = await axios.get(`${ApiUrl}/teachings/delete?id=${id}`, {
    withCredentials: true,
  });
  return response.data;
};

export const createTeachings = async (formData) => {
  const response = await axios.post(`${ApiUrl}/teachings/create`, formData, {
    withCredentials: true,
  });

  return response.data;
};

export const updateTeaching = async ({ formData, id }) => {
  const response = await axios.post(
    `${ApiUrl}/teachings/update?id=${id}`,
    formData,
    {
      withCredentials: true,
    }
  );

  return response.data;
};

export const updateTeachingFile = async ({ formData, id }) => {
  const response = await axios.post(
    `${ApiUrl}/teachings/update-file?id=${id}`,
    formData,
    {
      withCredentials: true,
    }
  );

  return response.data;
};
