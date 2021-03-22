import { createAction } from "../actionCreator";

export const SET_PLAYER_FIELD = 'SET_PLAYER_FIELD';
export const DELETE_PLAYER = 'DELETE_PLAYER';

export const SET_PLAYER_GENDER_LIST = 'SET_PLAYER_GENDER_LIST';
export const SET_PLAYER_JOB_LIST = 'SET_PLAYER_JOB_LIST';
export const SET_PLAYER_RACE_LIST = 'SET_PLAYER_RACE_LIST';
export const SET_PLAYER_TYPE_LIST = 'SET_PLAYER_TYPE_LIST';
export const SET_ZODIAC_SIGN_LIST = 'SET_ZODIAC_SIGN_LIST';

export const SET_EQUIPMENT_LIST = 'SET_EQUIPMENT_LIST';



export const setPlayerField = param => createAction(SET_PLAYER_FIELD, param);
export const deletePlayer = param => createAction(DELETE_PLAYER, param);
export const setPlayerGenderList = param => createAction(SET_PLAYER_GENDER_LIST, param);
export const setPlayerJobList = param => createAction(SET_PLAYER_JOB_LIST, param);
export const setPlayerRaceList = param => createAction(SET_PLAYER_RACE_LIST, param);
export const setPlayerTypeList = param => createAction(SET_PLAYER_TYPE_LIST, param);
export const setZodiacSignList = param => createAction(SET_ZODIAC_SIGN_LIST, param);
export const setEquipmentList = param => createAction(SET_EQUIPMENT_LIST, param);
