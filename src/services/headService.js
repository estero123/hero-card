import axios from 'axios';
import { heads } from '../enums/api'

const getHeadList = () => {
  const url = `${heads}/get-list`;
  return axios.get(url);
};

const addHead = head => {
  const url = `${heads}/add`;
  return axios.post(url, head);
};

const removeHead = id => {
  const url = `${heads}/${id}/remove`;
  return axios.delete(url);
};

const updateHead = head => {
  const url = `${heads}/update`;
  return axios.put(url, head);
};

export default {
  getList: getHeadList,
  add: addHead,
  remove: removeHead,
  update: updateHead
}
