import React from 'react';
import './playerMainStats.css';
import CtAvatar from "../CtAvatar/CtAvatar";
import BasicStats from "./BasicStats/BasicStats";
import AdvancedStats from "./AdvancedStats/AdvancedStats";
import Container from "../../../../../components/Container/Container";
import ActionTime from "../ActionTimeStatusTimeEvades/ActionTime/ActionTime";
import StatusTime from "../ActionTimeStatusTimeEvades/StatusTime/StatusTime";
import Column from "../../../../../components/Column/Column.style";
import Separator from "../../../../../components/Separator/Separator";

const PlayerMainStats = ({ clockTick, playerJob, playerLevel, playerId, playerMove, playerJump, playerCev, playerBaseHit, playerActionSpeed, statistics, playerRace, playerType, playerSex, actionSpeedProgressBar }) => {
  return <Container>
    <CtAvatar clockTick={clockTick} playerActionSpeed={playerActionSpeed} playerId={playerId} actionSpeedProgressBar={actionSpeedProgressBar} />
    <BasicStats
      playerJob={playerJob}
      playerLevel={playerLevel}
      playerId={playerId}
      playerMove={playerMove}
      playerJump={playerJump}
      playerCev={playerCev}
      playerBaseHit={playerBaseHit}
      statistics={statistics}
    />
    <AdvancedStats playerRace={playerRace} playerJob={playerJob} statistics={statistics} playerId={playerId} playerSex={playerSex} playerType={playerType} playerLevel={playerLevel}/>
    <Separator />
    <Column>
      <ActionTime/>
      <StatusTime/>
    </Column>
  </Container>
};
export default React.memo(PlayerMainStats);
