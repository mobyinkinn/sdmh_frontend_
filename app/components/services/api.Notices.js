import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchNotices = async () => {
  const response = await axios.get(`${ApiUrl}/notices/get-all`, {
    withCredentials: true,
  });
  return response.data.data; // Adjust based on actual API structure
};

export const blockNotices = async (id) => {
  const response = await axios.patch(
    `${ApiUrl}/notices/block-notice?id=${id}`,
    {},
    { withCredentials: true }
  );
  return response.data;
};


export const unblockNotices = async (id) => {
  const response = await axios.patch(`${ApiUrl}/notices/unblock-notice?id=${id}`, 
    {},
    { withCredentials: true }
  );
  return response.data.data;
};
export const deleteNotices = async (id) => {
  const response = await axios.get(`${ApiUrl}/notices/delete?id=${id}`, {
    withCredentials: true,
  });
  return response.data;
};