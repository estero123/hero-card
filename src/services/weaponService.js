import axios from 'axios';
import { weapons } from '../enums/api'

const getWeaponList = () => {
  const url = `${weapons}/get-list`;
  return axios.get(url);
};

const addWeapon = playerType => {
  const url = `${weapons}/add`;
  return axios.post(url, playerType);
};

const removeWeapon = id => {
  const url = `${weapons}/${id}/remove`;
  return axios.delete(url);
};

const updateWeapon = playerType => {
  const url = `${weapons}/update`;
  return axios.put(url, playerType);
};

export default {
  getList: getWeaponList,
  add: addWeapon,
  remove: removeWeapon,
  update: updateWeapon
}
