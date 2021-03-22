import React, { useState, useEffect } from 'react';
import playerTypeService from "../services/playerTypeService";
import { useDispatch, useSelector } from "react-redux";
import { setPlayerTypeList } from "../reducers/playersReducer/playersActions";

const usePlayerType = () => {
  const dispatch = useDispatch();
  const playerTypeList = useSelector(state => state.gameState.playerTypeList);
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchPlayerTypeList = React.useCallback(async () => {
    const response = await playerTypeService.getPlayerTypeList();
    if (response && response.status === 200) {
      dispatch(setPlayerTypeList(response.data));
      setIsLoaded(true);
    } else {
      setIsLoaded(true);
    }
  }, [dispatch]);

  useEffect(() => {
    if (!playerTypeList) {
      fetchPlayerTypeList();
    } else {
      setIsLoaded(true);
    }
  }, [fetchPlayerTypeList, playerTypeList]);

  const addPlayerType = React.useCallback(async playerType => {
    setIsLoaded(false);
    const response = await playerTypeService.addPlayerType(playerType);
    if (response && response.status === 200) {
      fetchPlayerTypeList();
    } else {
      setIsLoaded(true);
    }
  }, [fetchPlayerTypeList]);

  const deletePlayerType = React.useCallback(async id => {
    setIsLoaded(false);
    const response = await playerTypeService.removePlayerType(id);
    if (response && response.status === 200) {
      fetchPlayerTypeList();
    } else {
      setIsLoaded(true);
    }
  }, [fetchPlayerTypeList]);

  const updatePlayerType = React.useCallback(async playerType => {
    setIsLoaded(false);
    const response = await playerTypeService.updatePlayerType(playerType);
    if (response && response.status === 200) {
      fetchPlayerTypeList();
    } else {
      setIsLoaded(true);
    }
  }, [fetchPlayerTypeList]);

  const getPlayerType = React.useCallback(playerTypeId => {
    if (!playerTypeList) {
      fetchPlayerTypeList();
    }
    const type = playerTypeList.find(type => type.id === playerTypeId);
    return type;
  }, [playerTypeList, fetchPlayerTypeList]);

  return { playerTypeList, isLoaded, addPlayerType, updatePlayerType, deletePlayerType, getPlayerType };
};

export default usePlayerType;


