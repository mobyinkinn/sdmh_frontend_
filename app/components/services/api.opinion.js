import axios from "axios";
import { ApiUrl } from "./Api";

export const createOpinion = async (formData) => {
  const response = await axios.post(`${ApiUrl}/opinion/create`, formData, {
    withCredentials: true,
  });
  return response.data;
};

export const deleteOpinion = async (id) => {
  const response = await axios.get(`${ApiUrl}/opinion/delete?id=${id}`, {
    withCredentials: true,
  });
  return response.data;
};

export const fetchOpinion = async () => {
  const response = await axios.get(`${ApiUrl}/opinion/get-all`, {
    withCredentials: true,
  });
  return response.data.message;
};
