import axios from 'axios';
import { playerJobs } from '../enums/api'


const getPlayerJobList = () => {
  const url = `${playerJobs}/get-list`;
  return axios.get(url);
};

const addPlayerJob = playerType => {
  const url = `${playerJobs}/add`;
  return axios.post(url, playerType);
};

const removePlayerJob = id => {
  const url = `${playerJobs}/${id}/remove`;
  return axios.delete(url);
};

const updatePlayerJob = playerType => {
  const url = `${playerJobs}/update`;
  return axios.put(url, playerType);
};

export default { getPlayerJobList, addPlayerJob, removePlayerJob, updatePlayerJob }
