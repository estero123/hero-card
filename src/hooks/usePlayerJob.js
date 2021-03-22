import React, { useEffect, useState } from "react";
import playerJobService from "../services/jobService";
import { useDispatch, useSelector } from "react-redux";
import { setPlayerJobList } from "../reducers/playersReducer/playersActions";

const usePlayerJob = () => {
  const dispatch = useDispatch();
  const playerJobList = useSelector(state => state.gameState.playerJobList);
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchPlayerJobList = React.useCallback(async () => {
    const response = await playerJobService.getPlayerJobList();
    if (response && response.status === 200) {
      dispatch(setPlayerJobList(response.data));
      setIsLoaded(true);
    } else {
      setIsLoaded(true);
    }
  }, [dispatch]);

  useEffect(() => {
    if (!playerJobList) {
      fetchPlayerJobList();
    } else {
      setIsLoaded(true);
    }
  }, [fetchPlayerJobList, playerJobList]);

  const addPlayerJob = React.useCallback(async job => {
    setIsLoaded(false);
    const response = await playerJobService.addPlayerJob(job);
    if (response && response.status === 200) {
      fetchPlayerJobList();
    } else {
      setIsLoaded(true);
    }
  }, [fetchPlayerJobList]);

  const deletePlayerJob = React.useCallback(async id => {
    setIsLoaded(false);
    const response = await playerJobService.removePlayerJob(id);
    if (response && response.status === 200) {
      fetchPlayerJobList();
    } else {
      setIsLoaded(true);
    }
  }, [fetchPlayerJobList]);

  const updatePlayerJob = React.useCallback(async job => {
    setIsLoaded(false);
    const response = await playerJobService.updatePlayerJob(job);
    if (response && response.status === 200) {
      fetchPlayerJobList();
    } else {
      setIsLoaded(true);
    }
  }, [fetchPlayerJobList]);

  const getPlayerJob = React.useCallback(jobId => {
    if (!playerJobList) {
      fetchPlayerJobList();
    }
   const job = playerJobList.find(job => job.id === jobId);
   return job;
  }, [playerJobList, fetchPlayerJobList]);

  return { playerJobList, isLoaded, addPlayerJob, updatePlayerJob, deletePlayerJob, getPlayerJob };
};

export default usePlayerJob;
