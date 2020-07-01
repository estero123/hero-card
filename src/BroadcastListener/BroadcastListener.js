import React from 'react';
import { useDispatch } from "react-redux";


const BroadcastListener = () => {
  const dispatch = useDispatch();
  const broadcastChannel = new BroadcastChannel('heroCard');

  broadcastChannel.onmessage = (message) => {
    const { data } = message;
    dispatch(data.action);
    // switch (data.type) {
    //   case SET_CLOCK_TICK:
    //     dispatch(setClockTickAction(data.value));
    //     break;
    //   case INCREMENT_CLOCK_TICK:
    //     dispatch(incrementClockTickAction());
    //     break;
    //   default:
    //     return ''
    // }
  };

  return <></>
};

export default BroadcastListener;
