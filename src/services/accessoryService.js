import axios from 'axios';
import { accessories } from '../enums/api'

const getAccessoryList = () => {
  const url = `${accessories}/get-list`;
  return axios.get(url);
};

const addAccessory = accessory => {
  const url = `${accessories}/add`;
  return axios.post(url, accessory);
};

const removeAccessory = id => {
  const url = `${accessories}/${id}/remove`;
  return axios.delete(url);
};

const updateAccessory = accessory => {
  const url = `${accessories}/update`;
  return axios.put(url, accessory);
};

export default {
  getList: getAccessoryList,
  add: addAccessory,
  remove: removeAccessory,
  update: updateAccessory
}
