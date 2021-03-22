import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { TabPanel } from "react-tabs";
import PlayerTab from "./PlayerTab/PlayerTab";
import { PlayersList, StyledPlayerTab, StyledTabs, TabContent } from "./PlayerTabs.style";
import Text from "../../components/Text/Text";
import PlainButton from "../../components/PlainButton/PlainButton";
import { deletePlayer } from "../../reducers/playersReducer/playersActions";
import { useDispatch } from "react-redux";

const PlayerTabsPage = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(0);
  const players =  useSelector(state => state.gameState.players) || [];
  const dispatch = useDispatch();

  const onDeletePlayer = React.useCallback((e, playerId, playerTabIndex) => {
    const data = {
      playerId
    };
    dispatch(deletePlayer(data));
    let newIndex = 0;
    if (selectedPlayer > playerTabIndex) {
      newIndex = selectedPlayer - 1;
    }
    if (selectedPlayer < playerTabIndex) {
      newIndex = selectedPlayer;
    }
    setSelectedPlayer(newIndex);
    e.preventDefault();
    e.stopPropagation();
  }, [dispatch, setSelectedPlayer, selectedPlayer]);

  return <StyledTabs selectedIndex={selectedPlayer} onSelect={tabIndex => setSelectedPlayer(tabIndex)}>
    <PlayersList>
      {Object.keys(players).map((key, index) => <StyledPlayerTab key={key}>
        <TabContent>
        <Text>{players[key].playerName}</Text>
          {index !== selectedPlayer && <PlainButton onClick={(e) => onDeletePlayer(e, players[key].playerId, index)} style={{marginLeft: '8px', border: '1px solid #683517', borderRadius: '3px'}}>x</PlainButton>}
        </TabContent>
      </StyledPlayerTab>)}
    </PlayersList>
    {Object.keys(players).map(key => <TabPanel key={key}><PlayerTab {...players[key]}/></TabPanel>)}
  </StyledTabs>
};

export default React.memo(PlayerTabsPage);
