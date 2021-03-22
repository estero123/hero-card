import { combineReducers } from "redux";
import adminStateReducer from "./adminStateReducer/adminStateReducer";
import playersReducer from "./playersReducer/playersReducer";

const reducers = combineReducers({
  adminState: adminStateReducer,
  gameState: playersReducer
});

export default reducers;
