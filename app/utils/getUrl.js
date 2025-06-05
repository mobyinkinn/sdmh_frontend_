// utils/getBannerUrl.js

import { AnotherUrl } from "../components/services/AnotherUrl";

export const getUrl = (url) => {
  if (!url) return "";
  const fileName = url.substring(url.lastIndexOf("/") + 1); // Extract the file name from the URL
  return AnotherUrl(fileName); // Use the AnotherUrl method to get the full URL
};
