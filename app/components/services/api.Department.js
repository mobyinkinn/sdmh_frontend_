import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchAllDepartments = async () => {
  const response = await axios.get(`${ApiUrl}/department/get-all`, {
    withCredentials: true,
  });

  return response.data.data;
};

export const fetchDepartment = async (id) => {
  const response = await axios.get(`${ApiUrl}/department/get-all`, {
    withCredentials: true,
  });

  return response.data;
};

export const deleteDepartment = async (id) => {
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

export const createDepartment = async (data) => {
  const response = await axios.post(`${ApiUrl}/department/create`, data, {
    withCredentials: true,
  });

  return response.data;
};

export const editDepartment = async ({ formdata, id }) => {
  const response = await axios.post(
    `${ApiUrl}/department/update?id=${id}`,
    formdata,
    { withCredentials: true }
  );

  return response.data;
};

export const updateImage = async ({ id, formdata }) => {
  const response = await axios.post(
    `${ApiUrl}/department/update-image?id=${id}`,
    formdata,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const updateHomeImage = async ({ id, formdata }) => {
  const response = await axios.post(
    `${ApiUrl}/department/update-home-image?id=${id}`,
    formdata,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const updateBanner = async ({ id, formdata }) => {
  const response = await axios.post(
    `${ApiUrl}/department/update-banner?id=${id}`,
    formdata,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const updateMobileBanner = async ({ id, formdata }) => {
  const response = await axios.post(
    `${ApiUrl}/department/update-mobile-banner?id=${id}`,
    formdata,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const fetchDepartmentById = async (_id) => {
  const response = await axios.get(`${ApiUrl}/department/getbyId?id=${_id}`, {
    withCredentials: true,
  });
  return response.data.message; // Adjust based on the actual API response structure
};

export const importDepartments = async (file) => {
  const formData = new FormData();
  formData.append("csv", file);

  const response = await axios.post(
    `${ApiUrl}/department/import-departments`,
    formData,
    {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};

export const deleteBanner = async (id) => {
  const response = await axios.delete(
    `${ApiUrl}/department/delete-banner?id=${id}`,
    {
      withCredentials: true,
    }
  );
  return response.data;
};
