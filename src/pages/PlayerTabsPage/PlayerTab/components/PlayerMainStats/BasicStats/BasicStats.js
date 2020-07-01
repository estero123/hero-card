import React from "react";
import BasicStat from "../../../../../../components/BasicStat/BasicStat";
import './basicStats.css';
import Select from "../../../../../../components/Select/Select";
import StatCalculator from "../../../../../../components/StatCalculator/StatCalculator";
import Container from "../../../../../../components/Container/Container";
import levelOptions from "../../../../../../enums/levelOptions";
import playerJobOptions from "../../../../../../enums/playerJobOptions";
import Row from "../../../../../../components/Row/Row.style";
import Separator from "../../../../../../components/Separator/Separator";
import StatisticGenericWrapper from "../../../../../../components/StatisticGenericWrapper/StatisticGenericWrapper";


const BasicStats = ({playerJob, playerLevel, playerId, playerMove, playerJump, playerCev, playerBaseHit}) => {
  return <Row><Container variant='column'>
    <Container>
      <BasicStat>
        <StatisticGenericWrapper
        selected={playerLevel}
        field='playerLevel'
        playerId={playerId}
        options={levelOptions}
        Component={Select}
        />
      </BasicStat>
    </Container>
    <Container>
      <BasicStat>
        <StatisticGenericWrapper
          selected={playerJob}
          field='playerJob'
          playerId={playerId}
          options={playerJobOptions}
          Component={Select}
        />
      </BasicStat>
    </Container>
    <Container>
      <BasicStat contentTop='27px'>
        <StatisticGenericWrapper
          value={playerMove}
          field='playerMove'
          playerId={playerId}
          margin='0px 0px 5px 0px'
          label="MOVE"
          Component={StatCalculator}
        />
        <StatisticGenericWrapper
          value={playerJump}
          field='playerJump'
          playerId={playerId}
          label="JUMP"
          Component={StatCalculator}
        />
      </BasicStat>
    </Container>
    <Container>
      <BasicStat>
        <StatisticGenericWrapper
          value={playerCev}
          field='playerCev'
          playerId={playerId}
          label="Cev"
          Component={StatCalculator}
        />
      </BasicStat>
    </Container>
    <Container>
      <BasicStat>
        <StatisticGenericWrapper
          value={playerBaseHit}
          field='playerBaseHit'
          playerId={playerId}
          label="Base hit"
          Component={StatCalculator}
        />
      </BasicStat>
    </Container>
  </Container>
    <Separator scale={1}/>
  </Row>
};

export default React.memo(BasicStats);
