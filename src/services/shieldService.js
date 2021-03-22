import axios from 'axios';
import { shields } from '../enums/api'

const getShieldList = () => {
  const url = `${shields}/get-list`;
  return axios.get(url);
};

const addShield = shield => {
  const url = `${shields}/add`;
  return axios.post(url, shield);
};

const removeShield = id => {
  const url = `${shields}/${id}/remove`;
  return axios.delete(url);
};

const updateShield = shield => {
  const url = `${shields}/update`;
  return axios.put(url, shield);
};

export default {
  getList: getShieldList,
  add: addShield,
  remove: removeShield,
  update: updateShield
}
