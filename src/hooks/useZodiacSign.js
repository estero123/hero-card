import React, { useState, useEffect } from 'react';
import zodiacSignService from "../services/zodiacSignService";
import { useDispatch, useSelector } from "react-redux";
import { setZodiacSignList } from "../reducers/playersReducer/playersActions";

const useZodiacSign = () => {
  const dispatch = useDispatch();
  const zodiacSignList = useSelector(state => state.gameState.zodiacSignList);
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchZodiacSignList = React.useCallback(async () => {
    const response = await zodiacSignService.getZodiacSignList();
    if (response && response.status === 200) {
      dispatch(setZodiacSignList(response.data));
      setIsLoaded(true);
    } else {
      setIsLoaded(true);
    }
  }, [dispatch]);

  useEffect(() => {
    if (!zodiacSignList) {
      fetchZodiacSignList();
    } else {
      setIsLoaded(true);
    }
  }, [fetchZodiacSignList, zodiacSignList]);

  const addZodiacSign = React.useCallback(async zodiacSign => {
    setIsLoaded(false);
    const response = await zodiacSignService.addZodiacSign(zodiacSign);
    if (response && response.status === 200) {
      fetchZodiacSignList();
    } else {
      setIsLoaded(true);
    }
  }, [fetchZodiacSignList]);

  const deleteZodiacSign = React.useCallback(async id => {
    setIsLoaded(false);
    const response = await zodiacSignService.removeZodiacSign(id);
    if (response && response.status === 200) {
      fetchZodiacSignList();
    } else {
      setIsLoaded(true);
    }
  }, [fetchZodiacSignList]);

  const updateZodiacSign = React.useCallback(async zodiacSign => {
    setIsLoaded(false);
    const response = await zodiacSignService.updateZodiacSign(zodiacSign);
    if (response && response.status === 200) {
      fetchZodiacSignList();
    } else {
      setIsLoaded(true);
    }
  }, [fetchZodiacSignList]);

  const getZodiacSign = React.useCallback(zodiacSignId => {
    if (!zodiacSignList) {
      fetchZodiacSignList();
    }
    const zodiacSign = zodiacSignList.find(zodiacSign => zodiacSign.id === zodiacSignId);
    return zodiacSign;
  }, [zodiacSignList, fetchZodiacSignList]);

  return { zodiacSignList, isLoaded, addZodiacSign, updateZodiacSign, deleteZodiacSign, getZodiacSign };
};

export default useZodiacSign;


