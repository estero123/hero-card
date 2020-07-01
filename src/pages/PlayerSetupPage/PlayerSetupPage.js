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
import getRace from "../../helpers/getRace";
import getRandomIntBetween from "../../helpers/getRandomIntBetween";
import playerSexOptions from "../../enums/playerSexOptions";
import playerTypeOptions from "../../enums/playerTypeOptions";
import playerRaceOptions from "../../enums/playerRaceOptions";
import playerZodiacSignOptions from "../../enums/playerZodiacSignOptions";
import playerJobOptions from "../../enums/playerJobOptions";


const PlayerSetupPage = () => {
  const history = useHistory();

  const players = useSelector(state => state.players).players || [];
  const dispatch = useDispatch();

  const startGame = React.useCallback(() => {
    Object.keys(players).forEach(playerKey => {
      const player = players[playerKey];
      const rawStats = getRace(player.playerRace).rawStats[player.playerType];
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


    window.open(window.location.origin + '/admin', '_blank', 'toolbar=0,location=0,menubar=0');

    history.push('/player-tabs')
  }, [dispatch, history, players]);

  const broadcastChannel = new BroadcastChannel('heroCard');


  const addPlayer = React.useCallback(() => {
    const player = {
      playerId: uuidv4(),
      playerName: '',
      clockTick: 0,
      playerSex: playerSexOptions[0].value,
      playerType: playerTypeOptions[0].value,
      playerRace: playerRaceOptions[0].value,
      playerZodiacSign: playerZodiacSignOptions[0].value,
      playerJob: playerJobOptions[0].value,
      playerLevel: 1,
      playerMove: 3,
      playerJump: 10
    };
    const broadcastMessage = {
      action: addPlayerAction(player)
    };
    broadcastChannel.postMessage(broadcastMessage);
  }, [broadcastChannel]);

  const checkDisabled = React.useCallback(() => {
    let isDisabled = false;
    const playersKeys = Object.keys(players);
    if (playersKeys.length > 0) {
      playersKeys.map(playerKey => {
        const trimmedName = players[playerKey].playerName.trim();
        if ( trimmedName ===  '') {
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
      <div style={{display: 'flex', width: '75%'}}>
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
