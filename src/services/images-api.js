import axios from "axios";

const API_KEY = "Aa1qswtHqHJPLD9QZQO0jzrDPjthIDZFfKR485VGmsc";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.params = {
  orientation: "landscape",
  per_page: 12,
  client_id: API_KEY,
};

export const getPhotos = async () => {
  const { data } = await axios.get(`photos`);
  return data;
};

export const getPhotosByQuery = async (query, page) => {
  const { data } = await axios.get(`search/photos?query=${query}&page=${page}`);
  return data;
};
