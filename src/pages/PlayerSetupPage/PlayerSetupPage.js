import React from 'react';
import Background from "../../components/Background/Background";
import Container from "../../components/Container/Container";
import PlayerName from "../PlayerTabsPage/PlayerTab/components/PlayerName/PlayerName";
import { TitleTextWrapper, TitleWrapper } from "../StartPage/StartPage.style";
import Text from "../../components/Text/Text";
import { Content, Header } from "./PlayerSetupPage.style";
import Center from "../../components/Center/Center";
import PlayerSetupContent from "./PlayerSetupContent";
import OrnamentButton from "../../components/OrnamentButton/OrnamentButton";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button/Button";
import { v4 as uuidv4 } from "uuid";
import { addPlayerAction } from "../../reducers/adminStateReducer/adminStateActions";
import { useDispatch, useSelector } from "react-redux";
import { setPlayerField } from "../../reducers/playersReducer/playersActions";
import getRandomIntBetween from "../../helpers/getRandomIntBetween";
import useZodiacSign from "../../hooks/useZodiacSign";
import usePlayerGender from "../../hooks/usePlayerGender";
import usePlayerType from "../../hooks/usePlayerType";
import usePlayerJob from "../../hooks/usePlayerJob";
import usePlayerRace from "../../hooks/usePlayerRace";
import useEquipment from "../../hooks/useEquipment";
import weaponService from "../../services/weaponService";
import weaponTypeService from "../../services/weaponTypeService";
import shieldService from "../../services/shieldService";
import headService from "../../services/headService";
import headTypeService from "../../services/headTypeService";
import bodyService from "../../services/bodyService";
import bodyTypeService from "../../services/bodyTypeService";
import accessoryService from "../../services/accessoryService";
import accessoryTypeService from "../../services/accessoryTypeService";


const redirectToTabs = history => {
  window.open(window.location.origin + '/admin', '_blank', 'toolbar=0,location=0,menubar=0');
  history.push('/player-tabs')
};

const getPlayerBaseHit = () => 1;
const getPlayerActionSpeed = () => 1;

const PlayerSetupPage = () => {
  const history = useHistory();

  const players = useSelector(state => state.gameState.players) || [];
  const dispatch = useDispatch();

  const { zodiacSignList } = useZodiacSign();
  const { genderList } = usePlayerGender();
  const { playerTypeList } = usePlayerType();
  const { playerJobList } = usePlayerJob();
  const { playerRaceList, getPlayerRace } = usePlayerRace();
  const { equipmentList: weaponList, equipmentTypeList: weaponTypeList } = useEquipment('weaponList', 'weaponTypeList', weaponService, weaponTypeService);
  const { equipmentList: shieldList } = useEquipment('shieldList', undefined, shieldService, undefined);
  const { equipmentList: headList, equipmentTypeList: headTypeList } = useEquipment('headList', 'headTypeList', headService, headTypeService);
  const { equipmentList: bodyList, equipmentTypeList: bodyTypeList } = useEquipment('bodyList', 'bodyTypeList', bodyService, bodyTypeService);
  const { equipmentList: accessoryList, equipmentTypeList: accessoryTypeList } = useEquipment('accessoryList', 'accessoryTypeList', accessoryService, accessoryTypeService);

  const startGame = React.useCallback(() => {
    Object.keys(players).forEach(playerKey => {
      const player = players[playerKey];
      const rawStats = getPlayerRace(player.playerRace).rawStats[player.playerType];
      Object.keys(rawStats).forEach(statKey => {
        const rawStat = rawStats[statKey][player.playerSex];
        const randomStatValue = getRandomIntBetween(rawStat.min, rawStat.max);
        const data = {
          playerId: player.playerId,
          field: `statistics.${statKey}.raw`,
          value: randomStatValue
        };
        dispatch(setPlayerField(data));
      })
    });


    redirectToTabs(history);
  }, [dispatch, history, players, getPlayerRace]);

  const broadcastChannel = new BroadcastChannel('heroCard');

  const getEquipmentDefault = React.useCallback((list, typeList) => {
    const typeId = typeList[0].id;
    const itemId = list.find(i => i.typeId === typeId).id;
    return [typeId, itemId];
  }, []);

  const addPlayer = React.useCallback(() => {

    const [weaponTypeId, weaponId] = getEquipmentDefault(weaponList, weaponTypeList);
    const [headTypeId, headId] = getEquipmentDefault(headList, headTypeList);
    const [bodyTypeId, bodyId] = getEquipmentDefault(bodyList, bodyTypeList);
    const [accessoryTypeId, accessoryId] = getEquipmentDefault(accessoryList, accessoryTypeList);

    const player = {
      playerId: uuidv4(),
      playerName: "",
      clockTick: 0,
      playerSex: genderList[0].id,
      playerType: playerTypeList[0].id,
      playerRace: playerRaceList[0].id,
      playerZodiacSign: zodiacSignList[0].id,
      playerJob: playerJobList[0].id,
      playerLevel: 1,
      playerBaseHit: getPlayerBaseHit(),
      playerActionSpeed: getPlayerActionSpeed(),
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
        br: {
          custom: 0
        },
        fa: {
          custom: 0
        },
        hp: {
          customMax: 0,
          raw: 0,
          custom: 0
        },
        mp: {
          customMax: 0,
          raw: 0,
          custom: 0
        },
        pa: {
          customMax: 0,
          raw: 0,
          custom: 0
        },
        ma: {
          customMax: 0,
          raw: 0,
          custom: 0
        },
        sp: {
          customMax: 0,
          raw: 0,
          custom: 0
        }
      },
      equipment: {
        firstWeapon: {
          typeId: weaponTypeId,
          equipmentId: weaponId,
          custom: {
            dmg: 0,
            wev: 0,
            wp: 0
          }
        },
        secondWeapon: {
          typeId: weaponTypeId,
          equipmentId: weaponId,
          custom: {
            dmg: 0,
            wev: 0,
            wp: 0
          }
        },
        firstShield: {
          equipmentId: shieldList[0].id,
          custom: {
            msEv: 0,
            psEv: 0
          }
        },
        secondShield: {
          equipmentId: shieldList[0].id,
          custom: {
            msEv: 0,
            psEv: 0
          }
        },
        head: {
          typeId: headTypeId,
          equipmentId: headId,
        },
        body: {
          typeId: bodyTypeId,
          equipmentId: bodyId,
        },
        accessory: {
          typeId: accessoryTypeId,
          equipmentId: accessoryId,
          custom: {
            paEv: 0,
            maEv: 0
          }
        }
      }

    };
    const broadcastMessage = {
      action: addPlayerAction(player)
    };
    broadcastChannel.postMessage(broadcastMessage);
  }, [broadcastChannel, genderList, playerJobList, playerRaceList, playerTypeList, zodiacSignList, weaponList, weaponTypeList, accessoryList, accessoryTypeList, bodyList, bodyTypeList, getEquipmentDefault, headList, headTypeList, shieldList]);

  const checkDisabled = React.useCallback(() => {
    let isDisabled = false;
    const playersKeys = Object.keys(players);
    if (playersKeys.length > 0) {
      playersKeys.map(playerKey => {
        const trimmedName = players[playerKey].playerName.trim();
        if (trimmedName === '') {
          isDisabled = true;
        }
        return false;
      });
    }
    if (playersKeys.length === 0) {
      isDisabled = true;
    }
    return isDisabled;
  }, [players]);

  return <Background>
    <Container height='100vh' alignItems='center' variant='column' noWrap={true}>
      <Header>
        <Center>
          <TitleWrapper width='390px' height='282px'>
            <TitleTextWrapper>
              <Text variant='app-title-middle'>HeroCard</Text>
            </TitleTextWrapper>
          </TitleWrapper>
        </Center>
        <PlayerName playerName='Setup players'/>
      </Header>
      <div style={{ display: 'flex', width: '75%' }}>
        <Button onClick={() => addPlayer()} width='200px' margin='0px 0px 20px 0px'>Add player</Button>
      </div>
      <Content id="contentSetup">
        <PlayerSetupContent/>
      </Content>
      <OrnamentButton onClick={() => startGame()} disabled={checkDisabled()}>
        <Text>Start!</Text>
      </OrnamentButton>
    </Container>
  </Background>
};
export default PlayerSetupPage
