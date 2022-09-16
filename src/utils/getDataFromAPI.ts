import axios from 'axios';

const BASE_URL = 'https://demos-iconcreations.com/schlafmiestrback/api';

export const getDataFromAPI = async (url: string) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`);
  return data;
};
