import { ADD_PLAYER, INCREMENT_CLOCK_TICK } from "../adminStateReducer/adminStateActions";
import {
  DELETE_PLAYER, SET_EQUIPMENT_LIST,
  SET_PLAYER_FIELD,
  SET_PLAYER_GENDER_LIST,
  SET_PLAYER_JOB_LIST,
  SET_PLAYER_RACE_LIST,
  SET_PLAYER_TYPE_LIST,
  SET_ZODIAC_SIGN_LIST
} from "./playersActions";
import { setIn } from "final-form";

const mockedInitState = {
  players: {
    'e97e9040-c966-401f-b935-ebe1c6188f8e': {
      playerId: 'e97e9040-c966-401f-b935-ebe1c6188f8e',
      playerName: 'Adam',
      clockTick: 0,
      playerSex: 'GEN-1',
      playerType: 'TYPE-1',
      playerRace: 'RACE-1',
      playerZodiacSign: 'ZODIAC-1',
      playerJob: 'JOB-1',
      playerLevel: '1',
      playerBaseHit: 1,
      playerActionSpeed: 1,
      statistics: {
        move: {
          custom: 0
        },
        jump: {
          custom: 0
        },
        cev: {
          custom: 0
        },
        fa: {
          custom: 0
        },
        br: {
          custom: 0
        },
        hp: {
          customMax: 0,
          raw: 491965,
          custom: 0
        },
        mp: {
          customMax: 0,
          raw: 239699,
          custom: 0
        },
        pa: {
          customMax: 0,
          raw: 81920,
          custom: 0
        },
        ma: {
          customMax: 0,
          raw: 81920,
          custom: 0
        },
        sp: {
          customMax: 0,
          raw: 9-8304,
          custom: 0
        }
      },
      equipment: {
        firstWeapon: {
          typeId: 'WT-121212121',
          equipmentId: 'WEAPON-12341234',
          custom: {
            dmg: 0,
            wev: 0,
            wp: 0,
            fa: 0,
            br: 0
          }
        },
        secondWeapon: {
          typeId: 'WT-121212121',
          equipmentId: 'WEAPON-12341234',
          custom: {
            dmg: 0,
            wev: 0,
            wp: 0,
            fa: 0,
            br: 0
          }
        },
        firstShield: {
          equipmentId: 'SHIELD-1',
          custom: {
            msEv: 0,
            psEv: 0
          }
        },
        secondShield: {
          equipmentId: 'SHIELD-1',
          custom: {
            msEv: 0,
            psEv: 0
          }
        },
        head: {
          typeId: 'HEAD-TYPE-121212121',
          equipmentId: 'HEAD-12341234'
        },
        body: {
          typeId: 'BODY-TYPE-121212121',
          equipmentId: 'BODY-12341234'
        },
        accessory: {
          typeId: 'ACCESSORY-TYPE-121212121',
          equipmentId: 'ACCESSORY-12341234',
          custom: {
            paEv: 0,
            maEv: 0
          }
        }
      }
    },
    '0ecb65f3-2289-403c-986b-1afa99fe2e7e': {
      playerId: '0ecb65f3-2289-403c-986b-1afa99fe2e7e',
      playerName: 'Hubert',
      clockTick: 0,
      playerSex: 'GEN-1',
      playerType: 'TYPE-1',
      playerRace: 'RACE-1',
      playerZodiacSign: 'ZODIAC-1',
      playerJob: 'JOB-1',
      playerLevel: 1,
      playerBaseHit: 1,
      playerActionSpeed: 1,
      statistics: {
        move: {
          custom: 0
        },
        jump: {
          custom: 0
        },
        cev: {
          custom: 0
        },
        fa: {
          custom: 0
        },
        br: {
          custom: 0
        },
        hp: {
          customMax: 0,
          raw: 493833,
          custom: 0
        },
        mp: {
          customMax: 0,
          raw: 244226,
          custom: 0
        },
        pa: {
          customMax: 0,
          raw: 81920,
          custom: 0
        },
        ma: {
          customMax: 0,
          raw: 81920,
          custom: 0
        },
        sp: {
          customMax: 0,
          raw: 98304,
          custom: 0
        }
      },
      equipment: {
        firstWeapon: {
          typeId: 'WT-121212121',
          equipmentId: 'WEAPON-12341234',
          custom: {
            dmg: 0,
            wev: 0,
            wp: 0
          }
        },
        secondWeapon: {
          typeId: 'WT-121212121',
          equipmentId: 'WEAPON-12341234',
          custom: {
            dmg: 0,
            wev: 0,
            wp: 0
          }
        },
        firstShield: {
          equipmentId: 'SHIELD-1',
          custom: {
            msEv: 0,
            psEv: 0
          }
        },
        secondShield: {
          equipmentId: 'SHIELD-1',
          custom: {
            msEv: 0,
            psEv: 0
          }
        },
        head: {
          typeId: 'HEAD-TYPE-121212121',
          equipmentId: 'HEAD-12341234'
        },
        body: {
          typeId: 'BODY-TYPE-121212121',
          equipmentId: 'BODY-12341234'
        },
        accessory: {
          typeId: 'ACCESSORY-TYPE-121212121',
          equipmentId: 'ACCESSORY-12341234',
          custom: {
            paEv: 0,
            maEv: 0
          }
        }
      }
    }
  },
  playerGenderList: [
    {
      id: 'GEN-1',
      label: 'Male'
    },
    {
      id: 'GEN-2',
      label: 'Female'
    }
  ],
  playerJobList: [
    {
      id: 'JOB-1',
      label: 'Squire',
      multipliers: {
        hp: 100,
        mp: 75,
        pa: 90,
        ma: 80,
        sp: 100
      },
      move: 4,
      jump: 3,
      cev: 5,
      allowedPlayerTypes: {
        'TYPE-3': true
      },
      c: {
        hp: 11,
        mp: 15,
        pa: 60,
        ma: 50,
        sp: 100
      }
    },
    {
      id: 'JOB-2',
      label: 'Chemist',
      allowedPlayerTypes: {
        'TYPE-1': true,
        'TYPE-2': true
      },
      multipliers: {
        hp: 80,
        mp: 75,
        pa: 75,
        ma: 80,
        sp: 100
      },
      move: 3,
      jump: 3,
      cev: 5,
      c: {
        hp: 12,
        mp: 16,
        pa: 75,
        ma: 50,
        sp: 100
      }
    }
  ],
  playerRaceList: [
    {
      id: 'RACE-1',
      label: 'Hume',
      rawStats: {
        'TYPE-1': {
          hp: {
            'GEN-1': {
              min: 491520,
              max: 524287
            },
            'GEN-2': {
              min: 458752,
              max: 491519
            }
          },
          mp: {
            'GEN-1': {
              min: 229376,
              max: 245759
            },
            'GEN-2': {
              min: 245760,
              max: 262143
            }
          },
          sp: {
            'GEN-1': {
              min: 98304,
              max: 98304
            },
            'GEN-2': {
              min: 98304,
              max: 98304
            }
          },
          pa: {
            'GEN-1': {
              min: 81920,
              max: 81920
            },
            'GEN-2': {
              min: 81920,
              max: 81920
            }
          },
          ma: {
            'GEN-1': {
              min: 81920,
              max: 81920
            },
            'GEN-2': {
              min: 81920,
              max: 81920
            }
          }
        },
        'TYPE-2': {
          hp: {
            'GEN-1': {
              min: 491520,
              max: 524287
            },
            'GEN-2': {
              min: 458752,
              max: 491519
            }
          },
          mp: {
            'GEN-1': {
              min: 229376,
              max: 245759
            },
            'GEN-2': {
              min: 245760,
              max: 262143
            }
          },
          sp: {
            'GEN-1': {
              min: 98304,
              max: 98304
            },
            'GEN-2': {
              min: 98304,
              max: 98304
            }
          },
          pa: {
            'GEN-1': {
              min: 81920,
              max: 81920
            },
            'GEN-2': {
              min: 81920,
              max: 81920
            }
          },
          ma: {
            'GEN-1': {
              min: 81920,
              max: 81920
            },
            'GEN-2': {
              min: 81920,
              max: 81920
            }
          }
        },
        'TYPE-3': {
          hp: {
            'GEN-1': {
              min: 491520,
              max: 524287
            },
            'GEN-2': {
              min: 458752,
              max: 491519
            }
          },
          mp: {
            'GEN-1': {
              min: 229376,
              max: 245759
            },
            'GEN-2': {
              min: 245760,
              max: 262143
            }
          },
          sp: {
            'GEN-1': {
              min: 98304,
              max: 98304
            },
            'GEN-2': {
              min: 98304,
              max: 98304
            }
          },
          pa: {
            'GEN-1': {
              min: 81920,
              max: 81920
            },
            'GEN-2': {
              min: 81920,
              max: 81920
            }
          },
          ma: {
            'GEN-1': {
              min: 81920,
              max: 81920
            },
            'GEN-2': {
              min: 81920,
              max: 81920
            }
          }
        }
      }
    },
    {
      id: 'RACE-2',
      label: 'Bangaa',
      rawStats: {
        'TYPE-1': {
          hp: {
            'GEN-1': {
              min: 491520,
              max: 524287
            },
            'GEN-2': {
              min: 458752,
              max: 491519
            }
          },
          mp: {
            'GEN-1': {
              min: 229376,
              max: 245759
            },
            'GEN-2': {
              min: 245760,
              max: 262143
            }
          },
          sp: {
            'GEN-1': {
              min: 98304,
              max: 98304
            },
            'GEN-2': {
              min: 98304,
              max: 98304
            }
          },
          pa: {
            'GEN-1': {
              min: 81920,
              max: 81920
            },
            'GEN-2': {
              min: 81920,
              max: 81920
            }
          },
          ma: {
            'GEN-1': {
              min: 81920,
              max: 81920
            },
            'GEN-2': {
              min: 81920,
              max: 81920
            }
          }
        },
        'TYPE-2': {
          hp: {
            'GEN-1': {
              min: 491520,
              max: 524287
            },
            'GEN-2': {
              min: 458752,
              max: 491519
            }
          },
          mp: {
            'GEN-1': {
              min: 229376,
              max: 245759
            },
            'GEN-2': {
              min: 245760,
              max: 262143
            }
          },
          sp: {
            'GEN-1': {
              min: 98304,
              max: 98304
            },
            'GEN-2': {
              min: 98304,
              max: 98304
            }
          },
          pa: {
            'GEN-1': {
              min: 81920,
              max: 81920
            },
            'GEN-2': {
              min: 81920,
              max: 81920
            }
          },
          ma: {
            'GEN-1': {
              min: 81920,
              max: 81920
            },
            'GEN-2': {
              min: 81920,
              max: 81920
            }
          }
        },
        'TYPE-3': {
          hp: {
            'GEN-1': {
              min: 491520,
              max: 524287
            },
            'GEN-2': {
              min: 458752,
              max: 491519
            }
          },
          mp: {
            'GEN-1': {
              min: 229376,
              max: 245759
            },
            'GEN-2': {
              min: 245760,
              max: 262143
            }
          },
          sp: {
            'GEN-1': {
              min: 98304,
              max: 98304
            },
            'GEN-2': {
              min: 98304,
              max: 98304
            }
          },
          pa: {
            'GEN-1': {
              min: 81920,
              max: 81920
            },
            'GEN-2': {
              min: 81920,
              max: 81920
            }
          },
          ma: {
            'GEN-1': {
              min: 81920,
              max: 81920
            },
            'GEN-2': {
              min: 81920,
              max: 81920
            }
          }
        }
      }
    }
  ],
  playerTypeList: [
    {
      id: 'TYPE-1',
      label: 'Hero'
    },
    {
      id: 'TYPE-2',
      label: 'Character'
    },
    {
      id: 'TYPE-3',
      label: 'Creature'
    }
  ],
  zodiacSignList: [
    {
      id: 'ZODIAC-1',
      label: 'Aries'
    },
    {
      id: 'ZODIAC-2',
      label: 'Taurus'
    }
  ],
  weaponList: [
    {
      id: 'WEAPON-12341234',
      label: 'Broadsword hih',
      typeId: 'WT-121212121',
      wp: 4,
      wev: 5,
      br: 5,
      hp: 0,
      fa: 0,
      sp: 0,
      pa: 0,
      dmg: 0,
      ma: 0,
      description: 'Desc'
    },
    {
      id: 'WEAPON-45645667',
      label: 'Magic Sword hih',
      typeId: 'WT-131331313',
      wp: 5,
      wev: 4,
      br: 0,
      hp: 0,
      fa: 5,
      sp: 0,
      pa: 0,
      dmg: 0,
      ma: 0,
      description: 'Description'
    }
  ],
  weaponTypeList: [
    {
      id: 'WT-121212121',
      label: 'Sword'
    },
    {
      id: 'WT-131331313',
      label: 'Blowgun'
    }
  ],
  shieldList: [
    {
      id: 'SHIELD-1',
      label: 'Escutcheon',
      psEv: 4,
      msEv: 5,
      ma: 1,
      description: 'Desc'
    },
    {
      id: 'SHIELD-2',
      label: 'Buckler',
      psEv: 5,
      msEv: 4,
      ma: 1,
      description: 'Description'
    }
  ],
  headList: [
    {
      id: 'HEAD-12341234',
      label: 'Leather Cap',
      typeId: 'HEAD-TYPE-121212121',
      hp: 8,
      mp: 0,
      pa: 0,
      ma: 0,
      sp: 0,
      description: ''
    },
    {
      id: 'HEAD-23423423',
      label: 'Leather Helm',
      typeId: 'HEAD-TYPE-131331313',
      hp: 10,
      mp: 0,
      pa: 0,
      ma: 0,
      sp: 0,
      description: ''
    }
  ],
  headTypeList: [
    {
      id: 'HEAD-TYPE-121212121',
      label: 'Hat'
    },
    {
      id: 'HEAD-TYPE-131331313',
      label: 'Helmet'
    }
  ],
  bodyList: [
    {
      id: 'BODY-12341234',
      label: 'Leather Armor',
      typeId: 'BODY-TYPE-121212121',
      hp: 10,
      mp: 0,
      pa: 0,
      ma: 0,
      sp: 0,
      description: ''
    },
    {
      id: 'BODY-23423423',
      label: 'Cotton Shirt',
      typeId: 'BODY-TYPE-131331313',
      hp: 5,
      mp: 5,
      pa: 0,
      ma: 0,
      sp: 0,
      description: ''
    }
  ],
  bodyTypeList: [
    {
      id: 'BODY-TYPE-121212121',
      label: 'Armour'
    },
    {
      id: 'BODY-TYPE-131331313',
      label: 'Robes'
    }
  ],
  accessoryList: [
    {
      id: 'ACCESSORY-12341234',
      label: 'Shoulder Cape',
      typeId: 'ACCESSORY-TYPE-121212121',
      hp: 0,
      mp: 0,
      pa: 0,
      ma: 0,
      sp: 0,
      paEv: 1,
      maEv: 1,
      move: 0,
      jump: 0,
      wp: 0,
      dmg: 0,
      description: ''
    },
    {
      id: 'ACCESSORY-45645667',
      label: 'Cameo Belt',
      typeId: 'ACCESSORY-TYPE-131331313',
      hp: 0,
      mp: 0,
      pa: 0,
      ma: 0,
      sp: 0,
      paEv: 15,
      maEv: 0,
      move: 0,
      jump: 0,
      wp: 0,
      dmg: 0,
      description: ''
    }
  ],
  accessoryTypeList: [
    {
      id: 'ACCESSORY-TYPE-121212121',
      label: 'Cloak'
    },
    {
      id: 'ACCESSORY-TYPE-131331313',
      label: 'Belt'
    }
  ]
};


// const initState = {
//   players: {},
//   playerGenderList: undefined,
//   playerJobList: undefined,
//   playerRaceList: undefined,
//   playerTypeList: undefined,
//   zodiacSignList: undefined,
//   weaponList: undefined,
//   weaponTypeList: undefined,
//   shieldList: undefined,
//   headList: undefined,
//   headTypeList: undefined,
//   bodyList: undefined,
//   bodyTypeList: undefined,
//   accessoryList: undefined,
//   accessoryTypeList: undefined
// };

const initState = mockedInitState;

const playersReducer = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT_CLOCK_TICK:
      const playersNew = {};
      Object.keys(state.players).forEach(key => {
        playersNew[key] = {
          ...state.players[key],
          clockTick: state.players[key].clockTick + 1,
          actionSpeedProgressBar: state.players[key].actionSpeedProgressBar + state.players[key].playerActionSpeed
        };
      });
      return {
        ...state,
        players: playersNew
      };
    case ADD_PLAYER:
      return {
        ...state,
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
        ...state,
        players: {
          ...state.players,
          [action.payload.playerId]: {
            ...setIn(state.players[action.payload.playerId], action.payload.field, action.payload.value)
          }
        },
      };
    case DELETE_PLAYER:
      let playersCopy = { ...state.players };
      delete playersCopy[action.payload.playerId];
      return {
        ...state,
        players: playersCopy
      };
    case SET_PLAYER_GENDER_LIST:
      return {
        ...state,
        playerGenderList: action.payload
      };
    case SET_PLAYER_JOB_LIST:
      return {
        ...state,
        playerJobList: action.payload
      };
    case SET_PLAYER_RACE_LIST:
      return {
        ...state,
        playerRaceList: action.payload
      };
    case SET_PLAYER_TYPE_LIST:
      return {
        ...state,
        playerTypeList: action.payload
      };
    case SET_ZODIAC_SIGN_LIST:
      return {
        ...state,
        zodiacSignList: action.payload
      };
    case SET_EQUIPMENT_LIST:
      return {
        ...state,
        [action.payload.equipmentField]: action.payload.value
      };
    default:
      return state;
  }
};

export default playersReducer
