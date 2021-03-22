import axios from 'axios';
import { zodiacSigns } from '../enums/api'


const getZodiacSignList = () => {
  const url = `${zodiacSigns}/get-list`;
  return axios.get(url);
};

const addZodiacSign = zodiacSign => {
  const url = `${zodiacSigns}/add`;
  return axios.post(url, zodiacSign);
};

const removeZodiacSign = id => {
  const url = `${zodiacSigns}/${id}/remove`;
  return axios.delete(url);
};

const updateZodiacSign = zodiacSign => {
  const url = `${zodiacSigns}/update`;
  return axios.put(url, zodiacSign);
};

export default { getZodiacSignList, addZodiacSign, removeZodiacSign, updateZodiacSign }
