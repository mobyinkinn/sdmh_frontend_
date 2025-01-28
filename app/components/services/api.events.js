//get all events events/get-all
//create event events/create
//delete event /events/delete?id=674024b991e676cb23e523d0
//update event events/update?id=67402334d0d4e334ed44a689
//add Images events/add-images?id=674022314deaf8cbbe7fb19b

import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchEvents = async () => {
  const response = await axios.get(`${ApiUrl}/events/get-all`, {
    withCredentials: true,
  });
  return response.data.message; // Adjust based on actual API structure
};

export const deleteEvent = async (id) => {
  const response = await axios.get(`${ApiUrl}/events/delete?id=${id}`, {
    withCredentials: true,
  });
  return response.data;
};

export const updateEvent = async ({ id, data }) => {
  const response = await axios.post(`${ApiUrl}/events/update?id=${id}`, data, {
    withCredentials: true,
  });
  return response.data;
};

export const createEvent = async (data) => {
  const response = await axios.post(`${ApiUrl}/events/create`, data, {
    withCredentials: true,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const addImagesToEvent = async ({ id, images }) => {
  const response = await axios.post(
    `${ApiUrl}/events/add-images?id=${id}`,
    images,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const removeImageFromEvent = async ({ id, data }) => {
  const response = await axios.post(
    `${ApiUrl}/events/delete-image?id=${id}`,
    data,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const updateSingleImageFromEvent = async ({ id, data }) => {
  const response = await axios.post(
    `${ApiUrl}/events/update-image?id=${id}`,
    data,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const fetchEventById = async (id) => {
  const response = await axios.get(`${ApiUrl}/events/get-by-id?_id=${id}`, {
    withCredentials: true,
  });
  return response.data.message;
};
