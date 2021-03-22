import axios from 'axios';
import { playerTypes } from '../enums/api'


const getPlayerTypeList = () => {
  const url = `${playerTypes}/get-list`;
  return axios.get(url);
};

const addPlayerType = playerType => {
  const url = `${playerTypes}/add`;
  return axios.post(url, playerType);
};

const removePlayerType = id => {
  const url = `${playerTypes}/${id}/remove`;
  return axios.delete(url);
};

const updatePlayerType = playerType => {
  const url = `${playerTypes}/${playerType.id}/update`;
  return axios.put(url, playerType);
};

export default { getPlayerTypeList, addPlayerType, removePlayerType, updatePlayerType }
