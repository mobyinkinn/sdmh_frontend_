import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchOpening = async () => {
  const response = await axios.get(`${ApiUrl}/openings/get-all`, {
    withCredentials: true,
  });
  return response.data.message; // Adjust based on actual API structure
};
