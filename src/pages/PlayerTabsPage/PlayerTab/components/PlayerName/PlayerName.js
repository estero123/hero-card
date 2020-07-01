import React from 'react';
import './PlayerName.css';
import Text from "../../../../../components/Text/Text";
const PlayerName = ({playerName }) => {
  return <div id="playerNameWrapper">
    <div id="playerNameText"><Text variant='big'>{playerName}</Text></div>
  </div>
};

export default React.memo(PlayerName);
