import axios from "axios";
import { ApiUrl } from "./Api";

export const createNewsletter = async (email) => {
  const response = await axios.post(`${ApiUrl}/newsletter/create`, email, {
    withCredentials: true,
  });
  return response.data;
};

export const deleteNewsletter = async (email) => {
  const response = await axios.get(
    `${ApiUrl}/newsletter/delete?email=${email}`,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const fetchNewsletter = async () => {
  const response = await axios.get(`${ApiUrl}/newsletter/get-all`, {
    withCredentials: true,
  });
  return response.data.message;
};
