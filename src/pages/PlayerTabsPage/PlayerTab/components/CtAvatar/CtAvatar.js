import React from "react";
import ClockTick from "../PlayerMainStats/ClockTick/ClockTick";
import Avatar from "../PlayerMainStats/Avatar/Avatar";
import CtActionButtons from "../PlayerMainStats/CtActionButtons/CtActionButtons";
import ProgressBar from "../PlayerMainStats/ProgressBar/ProgressBar";
import './ctAvatar.css';
import StatCalculator from "../../../../../components/StatCalculator/StatCalculator";
import Evades from "../ActionTimeStatusTimeEvades/Evades/Evades";
import Column from "../../../../../components/Column/Column.style";
import StatisticGenericWrapper from "../../../../../components/StatisticGenericWrapper/StatisticGenericWrapper";
const CtAvatar = ({clockTick, playerActionSpeed, playerId, actionSpeedProgressBar }) => {
  return <Column alignItems='center' margin='5px 0px 0px 0px'>
    <ClockTick clockTick={clockTick}/>
    <Avatar/>
    <CtActionButtons />
    <ProgressBar clockTick={clockTick} playerActionSpeed={playerActionSpeed} actionSpeedProgressBar={actionSpeedProgressBar} />
    <StatisticGenericWrapper
      value={playerActionSpeed}
      field='playerActionSpeed'
      playerId={playerId}
      margin='0px 0px 5px 0px'
      label="Action speed"
      Component={StatCalculator}
    />

    <Evades />
  </Column>
};

export default React.memo(CtAvatar);
