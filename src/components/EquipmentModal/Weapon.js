import React from 'react';
import Select from "../Select/Select";
import { Container, StatsWrapper, Wrapper } from "./Weapon.style";
import StatCalculator from "../StatCalculator/StatCalculator";
import Text from "../Text/Text";
import StatisticGenericWrapper from "../StatisticGenericWrapper/StatisticGenericWrapper";

const options = [
  {
    label: 'Weapon 1',
    value: 'W-1'
  },
  {
    label: 'Weapon 2',
    value: 'W-2'
  }
]

const Weapon = ({ label, weapon, playerId, field = 'firstWeapon' }) => {

  return <Container>
    <Text margin='0px 6px 0px 0px'>{label}:</Text>
    <StatsWrapper>
      <Wrapper>
        <StatisticGenericWrapper
          selected={weapon.type}
          field={`equipment.${field}.type`}
          playerId={playerId}
          options={options}
          Component={Select}
        />
        <StatisticGenericWrapper
          selected={weapon.item}
          field={`equipment.${field}.item`}
          playerId={playerId}
          options={options}
          Component={Select}
        />
      </Wrapper>
      <StatisticGenericWrapper
        key={`dmg-${field}`}
        value={weapon.statistics.dmg}
        field={`equipment.${field}.statistics.dmg`}
        playerId={playerId}
        label="DMG"
        margin='0px 6px 0px 12px'
        Component={StatCalculator}
      />
      <StatisticGenericWrapper
        key={`wev-${field}`}
        value={weapon.statistics.wev}
        field={`equipment.${field}.statistics.wev`}
        playerId={playerId}
        label="Wev"
        margin='0px 6px 0px 6px'
        Component={StatCalculator}
      />
      <StatisticGenericWrapper
        key={`wp-${field}`}
        value={weapon.statistics.wp}
        field={`equipment.${field}.statistics.wp`}
        playerId={playerId}
        label="WP"
        margin='0px 6px 0px 6px'
        Component={StatCalculator}
      />
    </StatsWrapper>
  </Container>
};
export default Weapon;
