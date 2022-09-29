import axios from 'axios';

const loadImages = async (page: number = 1) => {
  try {
    const URL = process.env.API_URL;
    const token = process.env.API_KEY;
    const { data } = await axios.get(`${URL}/photos?page=${page}&per_page=20`, {
      headers: { Authorization: `Client-ID ${token}` },
    });
    return data;
  } catch (error) {
    return console.log(error);
  }
};

export { loadImages };
