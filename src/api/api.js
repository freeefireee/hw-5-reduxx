import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export const fetchPosts = async () => {
  const response = await axios.get(`${BASE_URL}/posts`);
  return response.data;
};

export const fetchPost = async (id) => {
  const response = await axios.get(`${BASE_URL}/posts/${id}`);
  return response.data;
};
