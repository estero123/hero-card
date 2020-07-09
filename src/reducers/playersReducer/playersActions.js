import { createAction } from "../actionCreator";

export const SET_PLAYER_FIELD = 'SET_PLAYER_FIELD';
export const DELETE_PLAYER = 'DELETE_PLAYER';


export const setPlayerField = param => createAction(SET_PLAYER_FIELD, param);
export const deletePlayer = param => createAction(DELETE_PLAYER, param);
