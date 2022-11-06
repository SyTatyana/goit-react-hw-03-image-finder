import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: '30134814-45a027ae4da4b601a981739e4',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export const fetchImages = async (searchQuery, page) => {
  const response = await axios.get(`?q=${searchQuery}&page=${page}`);
  return response.data;
};

export function needValues(data) {
  return data.map(({ id, tags, largeImageURL, webformatURL }) => ({
    id,
    tags,
    largeImageURL,
    webformatURL,
  }));
}
