import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchBlogs = async () => {
  const response = await axios.get(`${ApiUrl}/blogs/get-all`, {
    withCredentials: true,
  });
  return response.data.message; // Adjust based on actual API structure
};

export const deleteBlog = async (id) => {
  const response = await axios.get(`${ApiUrl}/blogs/delete?id=${id}`, {
    withCredentials: true,
  });
  return response.data;
};
export const blockBlog = async (id) => {
  const response = await axios.patch(
    `${ApiUrl}/blogs/block-blog?id=${id}`,
    {},
    { withCredentials: true }
  );
  return response.data;
};

export const unblockBlog = async (id) => {
  const response = await axios.patch(
    `${ApiUrl}/blogs/unblock-blog?id=${id}`,
    {},
    { withCredentials: true }
  );
  return response.data;
};
export const updateBlog = async ({ id, data }) => {
  const response = await axios.post(`${ApiUrl}/blogs/update?id=${id}`, data, {
    withCredentials: true,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};