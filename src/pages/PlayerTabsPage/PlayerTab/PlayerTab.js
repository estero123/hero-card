import React from 'react';
import PlayerName from "./components/PlayerName/PlayerName";
import ActionButtons from "./components/ActionButtons/ActionButtons";
import PlayerMainStats from "./components/PlayerMainStats/PlayerMainStats";
import Container from "../../../components/Container/Container";
import Column from "../../../components/Column/Column.style";
import Row from "../../../components/Row/Row.style";
import Text from "../../../components/Text/Text";
import BasicStat from "../../../components/BasicStat/BasicStat";
import useZodiacSign from "../../../hooks/useZodiacSign";
import usePlayerRace from "../../../hooks/usePlayerRace";
import usePlayerGender from "../../../hooks/usePlayerGender";
import useEquipment from "../../../hooks/useEquipment";
import weaponService from "../../../services/weaponService";
import weaponTypeService from "../../../services/weaponTypeService";
import BraveFaith from "./components/BraveFaith/BraveFaith";

const PlayerTab = ({ playerName, clockTick, playerId, playerSex, playerRace, playerJob, playerZodiacSign, playerLevel, playerMove, playerJump, playerCev, playerBaseHit, playerActionSpeed, statistics, playerType, actionSpeedProgressBar, equipment }) => {

  const { getZodiacSign } = useZodiacSign();
  const { getPlayerRace } = usePlayerRace();
  const { getPlayerGender } = usePlayerGender();
  const { getEquipment: getWeapon } = useEquipment('weaponList', 'weaponTypeList', weaponService, weaponTypeService);

  const getWeaponDmg = weapon => equipment[weapon] && equipment[weapon].equipmentId ? getWeapon(equipment[weapon].equipmentId).dmg + equipment[weapon].custom.dmg : 0;

  return <Container margin='0px 5px 0px 5px'>
    <Column>
      <Row alignItems='center'>
        <PlayerName playerName={playerName}/>
        <BasicStat><Text variant='big'>{getZodiacSign(playerZodiacSign).label}</Text></BasicStat>
        <BasicStat><Text
          variant='big'>{getPlayerGender(playerSex).label} {getPlayerRace(playerRace).label}</Text></BasicStat>
        <BasicStat contentTop='27px'>
          <BraveFaith equipment={equipment} playerId={playerId} statistics={statistics} label="Faith" field='fa' />
          <BraveFaith equipment={equipment} playerId={playerId} statistics={statistics} label="Brave" field='br' />
        </BasicStat>
        <BasicStat contentTop='27px'>
          <Column>
            <Text>Weapon 1 DMG: {getWeaponDmg('firstWeapon')}</Text>
            <Text>Weapon 2 DMG: {getWeaponDmg('secondWeapon')}</Text>
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
