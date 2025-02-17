import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchDoctors = async () => {
  const response = await axios.get(`${ApiUrl}/doctor/get-all`, {
    withCredentials: true,
  });

  return response.data.data;
};

export const blockDoctor = async (id) => {
  const response = await axios.post(
    `${ApiUrl}/doctor/update?id=${id}`,
    { status: false },
    { withCredentials: true }
  );

  return response.data;
};

export const unblockDoctor = async (id) => {
  const response = await axios.post(
    `${ApiUrl}/doctor/update?id=${id}`,
    { status: true },
    { withCredentials: true }
  );

  return response.data;
};

export const updateDoctor = async ({ id, formdata }) => {
  const response = await axios.post(
    `${ApiUrl}/doctor/update?id=${id}`,
    formdata,
    { withCredentials: true }
  );

  return response.data;
};

export const deleteDoctor = async (id) => {
  const response = await axios.get(`${ApiUrl}/doctor/delete?id=${id}`, {
    withCredentials: true,
  });

  return response.data;
};

export const updateImage = async ({ id, formdata }) => {
  const response = await axios.post(
    `${ApiUrl}/doctor/update-image?id=${id}`,
    formdata,
    {
      withCredentials: true,
    }
  );

  return response.data;
};

export const createDoctor = async (formdata) => {
  const response = await axios.post(`${ApiUrl}/doctor/create`, formdata, {
    withCredentials: true,
  });

  return response.data;
};

export const fetchDoctorById = async (_id) => {
  const response = await axios.post(
    `${ApiUrl}/doctor/get`,
    { department: _id },
    {
      withCredentials: true,
    }
  );
  return response.data.message;
};

export const updateDoctorsOrder = async (formdata) => {
  const response = await axios.post(
    `${ApiUrl}/doctor/update-doctors-order`,
    formdata,
    {
      withCredentials: true,
    }
  );
  return response.data;
};
