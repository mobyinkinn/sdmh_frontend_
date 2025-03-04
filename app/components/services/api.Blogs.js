import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchBlogs = async () => {
  const response = await axios.get(`${ApiUrl}/blogs/get-all`, {
    withCredentials: true,
  });
  return response.data.message; // Adjust based on actual API structure
};

export const fetchBlogById = async (id) => {
  const response = await axios.get(`${ApiUrl}/blogs/get-by-id?_id=${id}`, {
    withCredentials: true,
  });
  return response.data.message;
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
  console.log("Updating blog", data);
  const response = await axios.post(`${ApiUrl}/blogs/update?id=${id}`, data, {
    withCredentials: true,
  });
  return response.data;
};

export const createBlog = async (data) => {
  const response = await axios.post(`${ApiUrl}/blogs/create`, data, {
    withCredentials: true,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const removeMultiImageFromBlog = async ({ id, data }) => {
  const response = await axios.post(
    `${ApiUrl}/blogs/delete-image?id=${id}`,
    data,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const updateSingleImageFromBlog = async ({ id, data }) => {
  const response = await axios.post(
    `${ApiUrl}/blogs/update-image?id=${id}`,
    data,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const updateMultiImagesFromBlog = async ({ id, images }) => {
  const response = await axios.post(
    `${ApiUrl}/blogs/update-images?id=${id}`,
    images,
    {
      withCredentials: true,
    }
  );
  return response.data;
};
