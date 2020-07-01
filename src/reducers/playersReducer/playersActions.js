import { createAction } from "../actionCreator";

export const SET_PLAYER_FIELD = 'SET_PLAYER_FIELD';

export const setPlayerField = param => createAction(SET_PLAYER_FIELD, param);
