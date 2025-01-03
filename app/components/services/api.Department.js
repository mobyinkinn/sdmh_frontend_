import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchAllDepartments = async () => {
  const response = await axios.get(`${ApiUrl}/department/get-all`, {
    withCredentials: true,
  });

  return response.data;
};

export const deleteDepartment = async () => {
  const response = await axios.get(`${ApiUrl}/department/delete?id=${id}`, {
    withCredentials: true,
  });

  return response;
};

export const blockDepartment = async (id) => {
  const response = await axios.post(
    `${ApiUrl}/department/update?id=${id}`,
    { status: false },
    {
      withCredentials: true,
    }
  );

  return response;
};

export const unblockDepartment = async (id) => {
  const response = await axios.post(
    `${ApiUrl}/department/update?id=${id}`,
    { status: true },
    {
      withCredentials: true,
    }
  );

  return response;
};
