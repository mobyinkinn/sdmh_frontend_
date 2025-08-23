import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchDoctors = async () => {
  const response = await axios.get(`${ApiUrl}/doctor/get-all`, {
    withCredentials: true,
  });
  return response.data.data;
};

export const blockDoctor = async (id) => {
  const response = await axios.patch(
    `${ApiUrl}/doctor/update?id=${id}`,
    { status: false },
    { withCredentials: true }
  );

  return response.data;
};

export const unblockDoctor = async (id) => {
  const response = await axios.patch(
    `${ApiUrl}/doctor/update?id=${id}`,
    { status: true },
    { withCredentials: true }
  );

  return response.data;
};

export const updateDoctor = async ({ id, formdata }) => {
  const response = await axios.patch(
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
//   const response = await axios.post(`${ApiUrl}/doctor/get`, {department:_id}, {
//     withCredentials: true,
//   });
//   return response.data.message;
// };
export const fetchDoctorBy = async (_id) => {
  const response = await axios.get(`${ApiUrl}/doctor/getbyId?id=${_id}`, {
    withCredentials: true,
  });
  return response.data.message; // Adjust based on the actual API response structure
};

export const fetchDoctorByID = async (_id) => {
  const response = await axios.get(`${ApiUrl}/doctor/getdoctorbyId?id=${_id}`, {
    withCredentials: true,
  });
  return response.data.message; // Adjust based on the actual API response structure
};

export const importDoctors = async (file) => {
  const formData = new FormData();
  formData.append("csv", file);

  const response = await axios.post(
    `${ApiUrl}/doctor/import-doctors`,
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
