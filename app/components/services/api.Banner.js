import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchBanners = async () => {
  const response = await axios.get(`${ApiUrl}/banner/get-all`, {
    withCredentials: true,
  });
  return response.data.message; // Adjust based on actual API structure
};

export const deleteBanner = async (page) => {
  const response = await axios.get(`${ApiUrl}/banner/delete?page=${page}`, {
    withCredentials: true,
  });
  return response.data;
};
export const blockBanner = async (id) => {
  const response = await axios.patch(
    `${ApiUrl}/banner/block-banner?id=${id}`,
    {},
    { withCredentials: true }
  );
  return response.data;
};

export const unblockBanner = async (id) => {
  const response = await axios.patch(
    `${ApiUrl}/banner/unblock-banner?id=${id}`,
    {},
    { withCredentials: true }
  );
  return response.data;
};
// export const updateBanner = async ({ id, data }) => {
//   const response = await axios.post(`${ApiUrl}/Banner/update?id=${id}`, data, {
//     withCredentials: true,
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });
//   return response.data;
// };

export const createBanner = async ({ data }) => {
  const response = await axios.post(`${ApiUrl}/banner/create`, data, {
    withCredentials: true,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};