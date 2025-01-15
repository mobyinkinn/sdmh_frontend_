import { ApiUrl } from "./Api";
import axios from "axios";

export const fetchVideos = async () => {
  const response = await axios.get(`${ApiUrl}/videos/get-all`, {
    withCredentials: true,
  });
  return response.data.message;
};

export const updateVideo = async ({ id, data }) => {
  const response = await axios.post(`${ApiUrl}/videos/update?id=${id}`, data, {
    withCredentials: true,
  });
  return response.data;
};

export const deleteVideo = async (id) => {
  const response = await axios.get(`${ApiUrl}/videos/delete?id=${id}`, {
    withCredentials: true,
  });

  return response.data;
};

export const createVideo = async (formdata) => {
  console.log(formdata);
  const response = await axios.post(`${ApiUrl}/videos/create`, formdata, {
    withCredentials: true,
  });
  return response.data;
};
