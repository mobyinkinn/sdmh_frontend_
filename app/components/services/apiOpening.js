import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchOpening = async () => {
  const response = await axios.get(`${ApiUrl}/openings/get-all`, {
    withCredentials: true,
  });
  return response.data.message; // Adjust based on actual API structure
};

export const deleteOpening = async (id) => {
  const response = await axios.get(`${ApiUrl}/openings/delete?id=${id}`, {
    withCredentials: true,
  });
  return response.data;
};
export const blockOpening = async (id) => {
  const response = await axios.patch(
    `${ApiUrl}/openings/block-opening?id=${id}`,
    {},
    { withCredentials: true }
  );
  return response.data;
};

export const unblockOpening = async (id) => {
  const response = await axios.patch(
    `${ApiUrl}/openings/unblock-opening?id=${id}`,
    {},
    { withCredentials: true }
  );
  return response.data;
};
export const updateOpening = async ({ id, data }) => {
  const response = await axios.post(
    `${ApiUrl}/openings/update?id=${id}`,
    data,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const createOpening = async (formdata) => {
  const response = await axios.post(`${ApiUrl}/openings/create`, formdata, {
    withCredentials: true,
  });
  return response.data;
};

export const fetchOpeningById = async (_id) => {
  const response = await axios.get(`${ApiUrl}/openings/getbyId?id=${_id}`, {
    withCredentials: true,
  });
  return response.data.message; // Adjust based on the actual API response structure
};
