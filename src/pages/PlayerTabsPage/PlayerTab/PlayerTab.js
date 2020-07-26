import React from 'react';
import PlayerName from "./components/PlayerName/PlayerName";
import ActionButtons from "./components/ActionButtons/ActionButtons";
import PlayerMainStats from "./components/PlayerMainStats/PlayerMainStats";
import Container from "../../../components/Container/Container";
import Column from "../../../components/Column/Column.style";
import Row from "../../../components/Row/Row.style";
import Text from "../../../components/Text/Text";
import BasicStat from "../../../components/BasicStat/BasicStat";
import StatCalculator from "../../../components/StatCalculator/StatCalculator";
import getOptionLabel from "../../../helpers/getOptionLabel";
import playerZodiacSignOptions from "../../../enums/playerZodiacSignOptions";
import playerSexOptions from "../../../enums/playerSexOptions";
import playerRaceOptions from "../../../enums/playerRaceOptions";

const PlayerTab = ({ playerName, clockTick, playerId, playerSex, playerRace, playerJob, playerZodiacSign, playerLevel, playerMove, playerJump, playerCev, playerBaseHit, playerActionSpeed, statistics, playerType, actionSpeedProgressBar, equipment }) => {

  return <Container margin='0px 5px 0px 5px'>
    <Column>
      <Row alignItems='center'>
        <PlayerName playerName={playerName}/>
        <BasicStat><Text variant='big'>{getOptionLabel(playerZodiacSign, playerZodiacSignOptions)}</Text></BasicStat>
        <BasicStat><Text
          variant='big'>{getOptionLabel(playerSex, playerSexOptions)} {getOptionLabel(playerRace, playerRaceOptions)}</Text></BasicStat>
        <BasicStat contentTop='27px'>
          <StatCalculator margin='0px 0px 5px 0px' label="Faith: 15" valuePath='player[id].stats.faith'/>
          <StatCalculator label="Brave: 15" valuePath='player[id].stats.brave'/>
        </BasicStat>
        <BasicStat contentTop='27px'>
          <Column>
            <Text>Weapon 1 DMG: 12</Text>
            <Text>Weapon 1 DMG: 12</Text>
          </Column>
        </BasicStat>
      </Row>
      <ActionButtons equipment={equipment} playerId={playerId} />
      <PlayerMainStats
        clockTick={clockTick}
        playerJob={playerJob}
        playerLevel={playerLevel}
        playerId={playerId}
        playerMove={playerMove}
        playerJump={playerJump}
        playerCev={playerCev}
        playerBaseHit={playerBaseHit}
        playerActionSpeed={playerActionSpeed}
        statistics={statistics}
        playerRace={playerRace}
        playerSex={playerSex}
        playerType={playerType}
        actionSpeedProgressBar={actionSpeedProgressBar}
      />
    </Column>
  </Container>
};

export default React.memo(PlayerTab);
