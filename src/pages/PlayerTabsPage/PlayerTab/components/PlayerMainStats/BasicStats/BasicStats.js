import React from "react";
import BasicStat from "../../../../../../components/BasicStat/BasicStat";
import './basicStats.css';
import Select from "../../../../../../components/Select/Select";
import StatCalculator from "../../../../../../components/StatCalculator/StatCalculator";
import Container from "../../../../../../components/Container/Container";
import levelOptions from "../../../../../../enums/levelOptions";
import Row from "../../../../../../components/Row/Row.style";
import Separator from "../../../../../../components/Separator/Separator";
import StatisticGenericWrapper from "../../../../../../components/StatisticGenericWrapper/StatisticGenericWrapper";
import usePlayerJob from "../../../../../../hooks/usePlayerJob";


const BasicStats = ({playerJob, playerLevel, playerId, statistics, playerBaseHit}) => {

  const { playerJobList, getPlayerJob } = usePlayerJob();

  const getStatValue = (field) => {
    if (statistics[field]) {
      const job = getPlayerJob(playerJob);
      const customValue = statistics[field].custom;
      const result = job[field] + customValue;
      return result;
    }
    return 0;
  };

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
          options={playerJobList}
          Component={Select}
        />
      </BasicStat>
    </Container>
    <Container>
      <BasicStat contentTop='27px'>
        <StatisticGenericWrapper
          value={getStatValue('move')}
          field='statistics.move.custom'
          playerId={playerId}
          margin='0px 0px 5px 0px'
          label="MOVE"
          Component={StatCalculator}
        />
        <StatisticGenericWrapper
          value={getStatValue('jump')}
          field='statistics.jump.custom'
          playerId={playerId}
          label="JUMP"
          Component={StatCalculator}
        />
      </BasicStat>
    </Container>
    <Container>
      <BasicStat>
        <StatisticGenericWrapper
          value={getStatValue('cev')}
          field='statistics.cev.custom'
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
