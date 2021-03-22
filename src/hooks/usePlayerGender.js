import React, { useState, useEffect } from 'react';
import genderService from "../services/genderService";
import { useDispatch, useSelector } from "react-redux";
import { setPlayerGenderList } from "../reducers/playersReducer/playersActions";

const usePlayerGender = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const genderList = useSelector(state => state.gameState.playerGenderList);
  const dispatch = useDispatch();

  const fetchGenderList = React.useCallback(async () => {
    const response = await genderService.getGenderList();
    if (response && response.status === 200) {
      dispatch(setPlayerGenderList(response.data));
      setIsLoaded(true);
    } else {
      setIsLoaded(true);
    }
  }, [dispatch]);

  useEffect(() => {
    if (!genderList) {
      fetchGenderList();
    } else {
      setIsLoaded(true)
    }
  }, [fetchGenderList, genderList]);

  const addGender = React.useCallback(async gender => {
    setIsLoaded(false);
    const response = await genderService.addGender(gender);
    if (response && response.status === 200) {
      fetchGenderList();
    } else {
      setIsLoaded(true);
    }
  }, [fetchGenderList]);

  const deleteGender = React.useCallback(async id => {
    setIsLoaded(false);
    const response = await genderService.removeGender(id);
    if (response && response.status === 200) {
      fetchGenderList();
    } else {
      setIsLoaded(true);
    }
  }, [fetchGenderList]);

  const updateGender = React.useCallback(async gender => {
    setIsLoaded(false);
    const response = await genderService.updateGender(gender);
    if (response && response.status === 200) {
      fetchGenderList();
    } else {
      setIsLoaded(true);
    }
  }, [fetchGenderList]);

  const getPlayerGender = React.useCallback(genderId => {
    if (!genderList) {
      fetchGenderList();
    }
    const gender = genderList.find(gender => gender.id === genderId);
    return gender;
  }, [genderList, fetchGenderList]);

  return { genderList, isLoaded, addGender, updateGender, deleteGender, getPlayerGender };
};

export default usePlayerGender;


