import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { TabPanel } from "react-tabs";
import PlayerTab from "./PlayerTab/PlayerTab";
import { PlayersList, StyledPlayerTab, StyledTabs } from "./PlayerTabs.style";
import Text from "../../components/Text/Text";

const PlayerTabsPage = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(0);
  const players =  useSelector(state => state.players).players || [];

  return <StyledTabs selectedIndex={selectedPlayer} onSelect={tabIndex => setSelectedPlayer(tabIndex)}>
    <PlayersList>
      {Object.keys(players).map(key => <StyledPlayerTab key={key}><Text>{players[key].playerName}</Text></StyledPlayerTab>)}
    </PlayersList>
    {Object.keys(players).map(key => <TabPanel key={key}><PlayerTab {...players[key]}/></TabPanel>)}
  </StyledTabs>
};

export default React.memo(PlayerTabsPage);
