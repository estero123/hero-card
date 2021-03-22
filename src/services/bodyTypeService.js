import axios from 'axios';
import { bodyTypes } from '../enums/api'

const getBodyTypeList = () => {
  const url = `${bodyTypes}/get-list`;
  return axios.get(url);
};

const addBodyType = bodyType => {
  const url = `${bodyTypes}/add`;
  return axios.post(url, bodyType);
};

const removeBodyType = id => {
  const url = `${bodyTypes}/${id}/remove`;
  return axios.delete(url);
};

const updateBodyType = bodyType => {
  const url = `${bodyTypes}/update`;
  return axios.put(url, bodyType);
};

export default {
  getList: getBodyTypeList,
  add: addBodyType,
  remove: removeBodyType,
  update: updateBodyType
}
