import { createAction } from "../actionCreator";

export const SET_CLOCK_TICK = 'SET_CLOCK_TICK';
export const INCREMENT_CLOCK_TICK = 'INCREMENT_CLOCK_TICK';
export const ADD_PLAYER = 'ADD_PLAYER';

export const setClockTickAction = param => createAction(SET_CLOCK_TICK, param);
export const incrementClockTickAction = () => createAction(INCREMENT_CLOCK_TICK, null);
export const addPlayerAction = param => createAction(ADD_PLAYER, param);
