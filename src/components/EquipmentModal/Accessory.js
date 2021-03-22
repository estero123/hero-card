import React from 'react';
import Text from "../Text/Text";
import { Container, StatsWrapper, Wrapper } from "./Weapon.style";
import Select from "../Select/Select";
import StatCalculator from "../StatCalculator/StatCalculator";
import StatisticGenericWrapper from "../StatisticGenericWrapper/StatisticGenericWrapper";
import useEquipment from "../../hooks/useEquipment";
import accessoryService from "../../services/accessoryService";
import accessoryTypeService from "../../services/accessoryTypeService";


const Accessory = ({label, accessory, playerId}) => {

  const { equipmentList, equipmentTypeList, onResetEquipmentType, getEquipmentPropValue } = useEquipment('accessoryList', 'accessoryTypeList', accessoryService, accessoryTypeService, accessory, playerId, 'accessory');

  const optionsFilteredByType = equipmentList && equipmentList.filter(w => w.typeId === accessory.typeId);

  return <Container>
    <Text margin='0px 6px 0px 0px'>{label}:</Text>
    <StatsWrapper>
      <Wrapper>
        <StatisticGenericWrapper
          selected={accessory.typeId}
          field={`equipment.accessory.typeId`}
          playerId={playerId}
          options={equipmentTypeList}
          customOnChange={onResetEquipmentType}
          Component={Select}
        />
        <StatisticGenericWrapper
          selected={accessory.equipmentId}
          field={`equipment.accessory.equipmentId`}
          playerId={playerId}
          options={optionsFilteredByType}
          Component={Select}
        />
      </Wrapper>
      <StatisticGenericWrapper
        key='PAev'
        value={getEquipmentPropValue('paEv') + accessory.custom.paEv}
        field={`equipment.accessory.custom.paEv`}
        playerId={playerId}
        label="PAev"
        margin='0px 6px 0px 12px'
        Component={StatCalculator}
      />
      <StatisticGenericWrapper
        key='MAev'
        value={getEquipmentPropValue('maEv') + accessory.custom.maEv}
        field={`equipment.accessory.custom.maEv`}
        playerId={playerId}
        label="MAev"
        margin='0px 6px 0px 6px'
        Component={StatCalculator}
      />
    </StatsWrapper>
  </Container>
};
export default Accessory
