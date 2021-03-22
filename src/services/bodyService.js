import axios from 'axios';
import { bodies } from '../enums/api'

const getBodyList = () => {
  const url = `${bodies}/get-list`;
  return axios.get(url);
};

const addBody = body => {
  const url = `${bodies}/add`;
  return axios.post(url, body);
};

const removeBody = id => {
  const url = `${bodies}/${id}/remove`;
  return axios.delete(url);
};

const updateBody = body => {
  const url = `${bodies}/update`;
  return axios.put(url, body);
};

export default {
  getList: getBodyList,
  add: addBody,
  remove: removeBody,
  update: updateBody
}
