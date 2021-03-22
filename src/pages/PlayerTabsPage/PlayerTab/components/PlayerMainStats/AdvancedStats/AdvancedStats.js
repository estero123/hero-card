import React from "react";
import AdvancedStat from "../../../../../../components/AdvancedStat/AdvancedStat";
import BasicStat from "../../../../../../components/BasicStat/BasicStat";
import StatCalculator from "../../../../../../components/StatCalculator/StatCalculator";
import StatisticGenericWrapper from "../../../../../../components/StatisticGenericWrapper/StatisticGenericWrapper";
import MKL from "../../../../../../enums/MKL";
import usePlayerJob from "../../../../../../hooks/usePlayerJob";
import usePlayerRace from "../../../../../../hooks/usePlayerRace";

const getPlayerLevelBonus = (raw, level, cValue) => {
  if (level === 1) {
    return 0;
  } else {
    let currentRaw = raw;
    for (let i = 2; i <= level; i++) {
      const bonus = currentRaw / ((level-1) + cValue);
      currentRaw = currentRaw + bonus;
    }
    const result = currentRaw - raw;
    return result;
  }
};

const AdvancedStats = ({ statistics, playerId, playerJob, playerRace, playerType, playerSex, playerLevel }) => {

  const { getPlayerJob } = usePlayerJob();
  const { getPlayerRace } = usePlayerRace();
  const getStatValue = (field) => {
    const job = getPlayerJob(playerJob);
    const bonus = Math.round(getPlayerLevelBonus(statistics[field].raw, playerLevel, job.c[field]));
    const multiplier = job.multipliers[field];
    const result = Math.round((((statistics[field].raw + bonus) * multiplier) / MKL) + (Number(statistics[field].custom) || 0));
    const max = getStatMaxValue(field);
    if (result > max) {
      return max
    } else {
      return result
    }
  };

  const getStatMaxValue = (field) => {
    const job = getPlayerJob(playerJob);
    const race = getPlayerRace(playerRace);
    const multiplier = job.multipliers[field];
    const raw = race.rawStats[playerType][field][playerSex].max;
    const bonus = Math.round(getPlayerLevelBonus(raw, playerLevel, job.c[field]));
    const result = (((raw + bonus) * multiplier) / MKL) + (Number(statistics[field].customMax) || 0);
    return Math.round(result);
  };

  return <div>
    <div className="row">
      <AdvancedStat>
        <StatisticGenericWrapper
          value={getStatValue('hp')}
          field='statistics.hp.custom'
          playerId={playerId}
          label="HP"
          Component={StatCalculator}
        />
      </AdvancedStat>
      <BasicStat>
        <StatisticGenericWrapper
          value={getStatMaxValue('hp')}
          field='statistics.hp.customMax'
          playerId={playerId}
          label="MAX HP"
          Component={StatCalculator}
        />
      </BasicStat>
    </div>
    <div className="row">
      <AdvancedStat>
        <StatisticGenericWrapper
          value={getStatValue('mp')}
          field='statistics.mp.custom'
          playerId={playerId}
          label="MP"
          Component={StatCalculator}
        />
      </AdvancedStat>
      <BasicStat>
        <StatisticGenericWrapper
          value={getStatMaxValue('mp')}
          field='statistics.mp.customMax'
          playerId={playerId}
          label="MAX MP"
          Component={StatCalculator}
        />
      </BasicStat>
    </div>
    <div className="row">
      <AdvancedStat>
        <StatisticGenericWrapper
          value={getStatValue('pa')}
          field='statistics.pa.custom'
          playerId={playerId}
          label="PA"
          Component={StatCalculator}
        />
      </AdvancedStat>
      <BasicStat>
        <StatisticGenericWrapper
          value={getStatMaxValue('pa')}
          field='statistics.pa.customMax'
          playerId={playerId}
          label="MAX PA"
          Component={StatCalculator}
        />
      </BasicStat>
    </div>
    <div className="row">
      <AdvancedStat>
        <StatisticGenericWrapper
          value={getStatValue('ma')}
          field='statistics.ma.custom'
          playerId={playerId}
          label="MA"
          Component={StatCalculator}
        />
      </AdvancedStat>
      <BasicStat>
        <StatisticGenericWrapper
          value={getStatMaxValue('ma')}
          field='statistics.ma.customMax'
          playerId={playerId}
          label="MAX MA"
          Component={StatCalculator}
        />
      </BasicStat>
    </div>
    <div className="row">
      <AdvancedStat>
        <StatisticGenericWrapper
          value={getStatValue('sp')}
          field='statistics.sp.custom'
          playerId={playerId}
          label="SP"
          Component={StatCalculator}
        />
      </AdvancedStat>
      <BasicStat>
        <StatisticGenericWrapper
          value={getStatMaxValue('sp')}
          field='statistics.sp.customMax'
          playerId={playerId}
          label="MAX SP"
          Component={StatCalculator}
        />
      </BasicStat>
    </div>
  </div>
};
export default React.memo(AdvancedStats);
