import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchDownloadables = async () => {
  const response = await axios.get(`${ApiUrl}/downloadables/get-all`, {
    withCredentials: true,
  });

  return response.data.data;
};

export const deleteDownloadables = async (id) => {
  const response = await axios.get(`${ApiUrl}/downloadables/delete?id=${id}`, {
    withCredentials: true,
  });

  return response;
};

export const updateDownloadables = async ({ id, formdata }) => {
  const response = await axios.post(
    `${ApiUrl}/downloadables/update?id=${id}`,
    formdata,
    { withCredentials: true }
  );

  return response;
};

export const createDownloadables = async (formdata) => {
  const response = await axios.post(
    `${ApiUrl}/downloadables/create`,
    formdata,
    {
      withCredentials: true,
    }
  );

  return response;
};

export const updateImage = async ({ id, formdata }) => {
  const response = await axios.post(
    `${ApiUrl}/downloadables/update?id=${id}`,
    formdata,
    { withCredentials: true }
  );

  return response;
};
