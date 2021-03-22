import axios from 'axios';
import { headTypes } from '../enums/api'

const getHeadTypeList = () => {
  const url = `${headTypes}/get-list`;
  return axios.get(url);
};

const addHeadType = headType => {
  const url = `${headTypes}/add`;
  return axios.post(url, headType);
};

const removeHeadType = id => {
  const url = `${headTypes}/${id}/remove`;
  return axios.delete(url);
};

const updateHeadType = headType => {
  const url = `${headTypes}/update`;
  return axios.put(url, headType);
};

export default {
  getList: getHeadTypeList,
  add: addHeadType,
  remove: removeHeadType,
  update: updateHeadType
}
