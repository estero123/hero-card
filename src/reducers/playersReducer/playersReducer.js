import { ADD_PLAYER, INCREMENT_CLOCK_TICK } from "../adminStateReducer/adminStateActions";
import { SET_PLAYER_FIELD } from "./playersActions";
import { setIn } from "final-form";

const initState = {
  players: {}
};


// const initState = {
//   players: {
//     'pId-1': {
//       playerId: 'pId-1',
//       playerName: "Player 1",
//       clockTick: 0,
//       playerSex: 'MALE',
//       playerType: 'HERO',
//       playerRace: 'HUME',
//       playerZodiacSign: 'ARIES',
//       playerJob: 'SQUIRE',
//       playerLevel: 1,
//       hp: 10,
//       playerMove: 3,
//       playerJump: 10,
//       playerCev: 1,
//       playerBaseHit: 1,
//       playerActionSpeed: 1,
//       statistics: {
//         hp: {
//           customMax: 0,
//           raw: 491540,
//           custom: 0
//         },
//         mp: {
//           customMax: 0,
//           raw: 229376,
//           custom: 0
//         },
//         pa: {
//           customMax: 0,
//           raw: 81920,
//           custom: 0
//         },
//         ma: {
//           customMax: 0,
//           raw: 81920,
//           custom: 0
//         },
//         sp: {
//           customMax: 0,
//           raw: 98304,
//           custom: 0
//         }
//       },
//     },
//     'pId-2': {
//       playerId: 'pId-2',
//       playerName: "Player 2",
//       clockTick: 0,
//       playerSex: 'MALE',
//       playerType: 'HERO',
//       playerRace: 'HUME',
//       playerZodiacSign: 'ARIES',
//       playerJob: 'SQUIRE',
//       playerLevel: 1,
//       playerMove: 3,
//       playerJump: 10,
//       playerCev: 1,
//       playerBaseHit: 1,
//       playerActionSpeed: 1,
//       statistics: {
//         hp: {
//           customMax: 0,
//           raw: 491540,
//           custom: 0
//         },
//         mp: {
//           customMax: 0,
//           raw: 229376,
//           custom: 0
//         },
//         pa: {
//           customMax: 0,
//           raw: 81920,
//           custom: 0
//         },
//         ma: {
//           customMax: 0,
//           raw: 81920,
//           custom: 0
//         },
//         sp: {
//           customMax: 0,
//           raw: 98304,
//           custom: 0
//         }
//       }
//     }
//   }
// };

const playersReducer = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT_CLOCK_TICK:
      return {
        players: {
          ...Object.keys(state.players).map(key => {
            return {
              ...state.players[key],
              clockTick: state.players[key].clockTick + 1
            }
          }),
        }
      };
    case ADD_PLAYER:
      return {
        players: {
          ...state.players,
          [action.payload.playerId]: {
            ...action.payload,
            clockTick: 0
          }
        }
      };
    case SET_PLAYER_FIELD:
      return {
        players: {
          ...state.players,
          [action.payload.playerId]: {
            ...setIn(state.players[action.payload.playerId], action.payload.field, action.payload.value)
          }
        }
      };
    default:
      return state;
  }
};

export default playersReducer
