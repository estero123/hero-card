import React, { useEffect, useState } from "react";
import playerRaceService from "../services/playerRaceService";
import { useDispatch, useSelector } from "react-redux";
import { setPlayerRaceList } from "../reducers/playersReducer/playersActions";

const usePlayerRace = () => {
  const dispatch = useDispatch();
  const playerRaceList = useSelector(state => state.gameState.playerRaceList);
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchPlayerRaceList = React.useCallback(async () => {
    const response = await playerRaceService.getPlayerRaceList();
    if (response && response.status === 200) {
      dispatch(setPlayerRaceList(response.data));
      setIsLoaded(true);
    } else {
      setIsLoaded(true);
    }
  }, [dispatch]);

  useEffect(() => {
    if (!playerRaceList) {
      fetchPlayerRaceList();
    } else {
      setIsLoaded(true);
    }
  }, [fetchPlayerRaceList, playerRaceList]);

  const addPlayerRace = React.useCallback(async race => {
    setIsLoaded(false);
    const response = await playerRaceService.addPlayerRace(race);
    if (response && response.status === 200) {
      fetchPlayerRaceList();
    } else {
      setIsLoaded(true);
    }
  }, [fetchPlayerRaceList]);

  const deletePlayerRace = React.useCallback(async id => {
    setIsLoaded(false);
    const response = await playerRaceService.removePlayerRace(id);
    if (response && response.status === 200) {
      fetchPlayerRaceList();
    } else {
      setIsLoaded(true);
    }
  }, [fetchPlayerRaceList]);

  const updatePlayerRace = React.useCallback(async race => {
    setIsLoaded(false);
    const response = await playerRaceService.updatePlayerRace(race);
    if (response && response.status === 200) {
      fetchPlayerRaceList();
    } else {
      setIsLoaded(true);
    }
  }, [fetchPlayerRaceList]);

  const getPlayerRace = React.useCallback(raceId => {
    if (!playerRaceList) {
      fetchPlayerRaceList();
    }
    const race = playerRaceList.find(race => race.id === raceId);
    return race;
  }, [playerRaceList, fetchPlayerRaceList]);

  return { playerRaceList, isLoaded, addPlayerRace, updatePlayerRace, deletePlayerRace, getPlayerRace };
};

export default usePlayerRace;
