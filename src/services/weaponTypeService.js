import axios from 'axios';
import { weaponTypes } from '../enums/api'

const getWeaponTypeList = () => {
  const url = `${weaponTypes}/get-list`;
  return axios.get(url);
};

const addWeaponType = playerType => {
  const url = `${weaponTypes}/add`;
  return axios.post(url, playerType);
};

const removeWeaponType = id => {
  const url = `${weaponTypes}/${id}/remove`;
  return axios.delete(url);
};

const updateWeaponType = playerType => {
  const url = `${weaponTypes}/update`;
  return axios.put(url, playerType);
};

export default {
  getList: getWeaponTypeList,
  add: addWeaponType,
  remove: removeWeaponType,
  update: updateWeaponType
}
