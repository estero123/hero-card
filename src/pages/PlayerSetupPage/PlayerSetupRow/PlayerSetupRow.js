import React from 'react';
import Input from "../../../components/Input/Input";
import { deletePlayer, setPlayerField } from "../../../reducers/playersReducer/playersActions";
import { useDispatch } from "react-redux";
import Select from "../../../components/Select/Select";
import playerSexOptions from "../../../enums/playerSexOptions";
import Row from "../../../components/Row/Row.style";
import playerTypeOptions from "../../../enums/playerTypeOptions";
import playerRaceOptions from "../../../enums/playerRaceOptions";
import playerZodiacSignOptions from "../../../enums/playerZodiacSignOptions";
import playerJobOptions from "../../../enums/playerJobOptions";
import BasicStat from "../../../components/BasicStat/BasicStat";
import Button from "../../../components/Button/Button";

const selectMargin = '0px 5px 0px 0px';

const PlayerSetupRow = ({ playerName, playerId, playerSex, playerType, playerRace, playerZodiacSign, playerJob }) => {
  const dispatch = useDispatch();

  const onChangePlayerData = React.useCallback((event, field) => {
    const data = {
      playerId,
      field,
      value: event.target.value.trim()
    };
    dispatch(setPlayerField(data));
  }, [dispatch, playerId]);

  const onDeletePlayer = React.useCallback(() => {
    const data = {
      playerId
    };
    dispatch(deletePlayer(data))
  }, [playerId, dispatch]);

  return <Row margin='3px 0px' height='120px' alignItems='center'>
    <BasicStat>
    <Input width='100px' placeholder='Player name' value={playerName} onChange={e => onChangePlayerData(e, 'playerName')}/>
    </BasicStat>
    <BasicStat>
    <Select margin={selectMargin} options={playerSexOptions} selected={playerSex} onChange={e => onChangePlayerData(e, 'playerSex')}/>
    </BasicStat>
    <BasicStat>
    <Select margin={selectMargin} options={playerTypeOptions} selected={playerType} onChange={e => onChangePlayerData(e, 'playerType')}/>
    </BasicStat>
    <BasicStat>
    <Select margin={selectMargin} options={playerRaceOptions} selected={playerRace} onChange={e => onChangePlayerData(e, 'playerRace')}/>
    </BasicStat>
    <BasicStat>
    <Select margin={selectMargin} options={playerZodiacSignOptions} selected={playerZodiacSign} onChange={e => onChangePlayerData(e, 'playerZodiacSign')}/>
    </BasicStat>
    <BasicStat>
    <Select margin={selectMargin} options={playerJobOptions} selected={playerJob} onChange={e => onChangePlayerData(e, 'playerJob')}/>
    </BasicStat>
    <Button onClick={() => onDeletePlayer()}>Delete</Button>
  </Row>
};
export default PlayerSetupRow;
