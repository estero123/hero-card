import axios from 'axios';
import { genders } from './../enums/api'


const getGenderList = () => {
  const url = `${genders}/get-list`;
  return axios.get(url);
};

const addGender = gender => {
  const url = `${genders}/add`;
  return axios.post(url, gender);
};

const removeGender = id => {
  const url = `${genders}/${id}/remove`;
  return axios.delete(url);
};

const updateGender = gender => {
  const url = `${genders}/${gender.id}/update`;
  return axios.put(url, gender);
};

export default { getGenderList, addGender, removeGender, updateGender }
