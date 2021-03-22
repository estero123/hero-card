import axios from 'axios';
import { accessoryTypes } from '../enums/api'

const getAccessoryTypeList = () => {
  const url = `${accessoryTypes}/get-list`;
  return axios.get(url);
};

const addAccessoryType = accessoryType => {
  const url = `${accessoryTypes}/add`;
  return axios.post(url, accessoryType);
};

const removeAccessoryType = id => {
  const url = `${accessoryTypes}/${id}/remove`;
  return axios.delete(url);
};

const updateAccessoryType = accessoryType => {
  const url = `${accessoryTypes}/update`;
  return axios.put(url, accessoryType);
};

export default {
  getList: getAccessoryTypeList,
  add: addAccessoryType,
  remove: removeAccessoryType,
  update: updateAccessoryType
}
