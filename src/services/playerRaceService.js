import axios from 'axios';
import { playerRaces } from '../enums/api'


const getPlayerRaceList = () => {
  const url = `${playerRaces}/get-list`;
  return axios.get(url);
};

const addPlayerRace = playerRace => {
  const url = `${playerRaces}/add`;
  return axios.post(url, playerRace);
};

const removePlayerRace = id => {
  const url = `${playerRaces}/${id}/remove`;
  return axios.delete(url);
};

const updatePlayerRace = playerRace => {
  const url = `${playerRaces}/update`;
  return axios.put(url, playerRace);
};

export default { getPlayerRaceList, addPlayerRace, removePlayerRace, updatePlayerRace }
