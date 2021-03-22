import React from 'react';
import Text from "../Text/Text";
import { Container, StatsWrapper, Wrapper } from "./Weapon.style";
import Select from "../Select/Select";
import StatCalculator from "../StatCalculator/StatCalculator";
import StatisticGenericWrapper from "../StatisticGenericWrapper/StatisticGenericWrapper";
import useEquipment from "../../hooks/useEquipment";
import shieldService from "../../services/shieldService";

const Shield = ({ label, shield, playerId, field }) => {

  const { equipmentList, getEquipmentPropValue } = useEquipment('shieldList', undefined, shieldService, undefined, shield, playerId, field);

  return <Container>
    <Text margin='0px 6px 0px 0px'>{label}:</Text>
    <StatsWrapper>
      <Wrapper>
        <StatisticGenericWrapper
          selected={shield.equipmentId}
          field={`equipment.${field}.equipmentId`}
          playerId={playerId}
          options={equipmentList}
          Component={Select}
        />
      </Wrapper>
      <StatisticGenericWrapper
        key={`msEv-${field}`}
        value={getEquipmentPropValue('msEv') + shield.custom.msEv}
        field={`equipment.${field}.custom.msEv`}
        playerId={playerId}
        label="MSev"
        margin='0px 6px 0px 12px'
        Component={StatCalculator}
      />
      <StatisticGenericWrapper
        key={`psEv-${field}`}
        value={getEquipmentPropValue('psEv') + shield.custom.psEv}
        field={`equipment.${field}.custom.psEv`}
        playerId={playerId}
        label="PSev"
        margin='0px 6px 0px 6px'
        Component={StatCalculator}
      />
    </StatsWrapper>
  </Container>
};
export default React.memo(Shield)
