import React from 'react';
import { useSelector } from "react-redux";
import { incrementClockTickAction, addPlayerAction } from "../../reducers/adminStateReducer/adminStateActions";
import './adminPage.css';

const AdminPage = () => {
  const broadcastChannel = new BroadcastChannel('heroCard');
  const clockTick = useSelector(state => state.adminState.clockTick);

  const incrementClockTick = React.useCallback(() => {
    const broadcastMessage = {
      action: incrementClockTickAction()
    };
    broadcastChannel.postMessage(broadcastMessage);
  }, [broadcastChannel]);

  const addPlayer = React.useCallback(() => {
    const broadcastMessage = {
      action: addPlayerAction()
    };
    broadcastChannel.postMessage(broadcastMessage);
  }, [broadcastChannel]);

  return <div id="adminWrapper">
  <h1>Round: {clockTick}</h1>
    <button onClick={incrementClockTick}>CT+</button>
    <button disabled={true} onClick={addPlayer}>Add player</button>
    <button>Save game</button>
    <button>Load game</button>
    <textarea />
  </div>
};

export default React.memo(AdminPage);
