import React from 'react';
import { useSelector } from "react-redux";
import PlayerSetupRow from "./PlayerSetupRow/PlayerSetupRow";
import Column from "../../components/Column/Column.style";

const PlayerSetupContent = () => {
  const players = useSelector(state => state.gameState.players) || [];

  return <Column>
    <Column>
      {Object.keys(players).map((key, index) => <PlayerSetupRow key={index} {...players[key]} />)}
    </Column>

  </Column>
};
export default PlayerSetupContent
