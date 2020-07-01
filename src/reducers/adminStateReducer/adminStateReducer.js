import { INCREMENT_CLOCK_TICK, SET_CLOCK_TICK } from "./adminStateActions";

const initState = {
  clockTick: 0
};

const userSettingsReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_CLOCK_TICK:
      return {
        ...state,
        clockTick: action.payload
      };
    case INCREMENT_CLOCK_TICK:
      return {
        ...state,
        clockTick: state.clockTick + 1
      };
    default:
      return state;
  }
};

export default userSettingsReducer
