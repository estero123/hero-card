import React from 'react';
import Input from "../../../components/Input/Input";
import { deletePlayer, setPlayerField } from "../../../reducers/playersReducer/playersActions";
import { useDispatch } from "react-redux";
import Select from "../../../components/Select/Select";
import Row from "../../../components/Row/Row.style";
import BasicStat from "../../../components/BasicStat/BasicStat";
import Button from "../../../components/Button/Button";
import usePlayerGender from "../../../hooks/usePlayerGender";
import usePlayerType from "../../../hooks/usePlayerType";
import usePlayerJob from "../../../hooks/usePlayerJob";
import usePlayerRace from "../../../hooks/usePlayerRace";
import useZodiacSign from "../../../hooks/useZodiacSign";

const selectMargin = '0px 5px 0px 0px';

const PlayerSetupRow = ({ playerName, playerId, playerSex, playerType, playerRace, playerZodiacSign, playerJob }) => {
  const dispatch = useDispatch();

  const { zodiacSignList } = useZodiacSign();
  const { genderList } = usePlayerGender();
  const { playerTypeList } = usePlayerType();
  const { playerJobList } = usePlayerJob();
  const { playerRaceList } = usePlayerRace();
  

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
    <Select margin={selectMargin} options={genderList} selected={playerSex} onChange={e => onChangePlayerData(e, 'playerSex')}/>
    </BasicStat>
    <BasicStat>
    <Select margin={selectMargin} options={playerTypeList} selected={playerType} onChange={e => onChangePlayerData(e, 'playerType')}/>
    </BasicStat>
    <BasicStat>
    <Select margin={selectMargin} options={playerRaceList} selected={playerRace} onChange={e => onChangePlayerData(e, 'playerRace')}/>
    </BasicStat>
    <BasicStat>
    <Select margin={selectMargin} options={zodiacSignList} selected={playerZodiacSign} onChange={e => onChangePlayerData(e, 'playerZodiacSign')}/>
    </BasicStat>
    <BasicStat>
    <Select margin={selectMargin} options={playerJobList} selected={playerJob} onChange={e => onChangePlayerData(e, 'playerJob')}/>
    </BasicStat>
    <Button onClick={() => onDeletePlayer()}>Delete</Button>
  </Row>
};
export default PlayerSetupRow;
