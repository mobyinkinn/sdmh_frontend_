import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchPages = async () => {
  const response = await axios.get(`${ApiUrl}/pages/get-all`, {
    withCredentials: true,
  });
  return response.data.data; // Adjust based on actual API structure
};
