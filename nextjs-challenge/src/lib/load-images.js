import axios from 'axios';

const loadImages = async (page = 1) => {
  const URL = process.env.API_URL;
  const token = process.env.API_KEY;
  const { data } = await axios.get(
    `${URL}/photos?page=${page}&per_page=20`,
    {
      headers: { Authorization: `Client-ID ${token}` },
    }
  );

  return data;
};

export { loadImages };