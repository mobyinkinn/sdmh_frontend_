import axios from "axios";
import { ApiUrl } from "./Api";

export async function signup({ fullName, email, password }) {}

export async function login({ email, password }) {
  const url = `${ApiUrl}/admin/login`;
  const formData = { email, password };

  const { data, error } = await axios.post(url, formData, {
    withCredentials: true,
  });

  return data;
}

export async function getCurrentUser() {
  const url = `${ApiUrl}/admin/get-admin`;
  try {
    const { data, error } = await axios.get(url, { withCredentials: true });
    if (data.statusCode === 200) {
      return data;
    }
  } catch (error) {
    return null;
  }
}

export async function logout() {
  const url = `${ApiUrl}/admin/logout`;
  const { data, error } = await axios.post(url, {}, { withCredentials: true });
  return data;
}
