import React from 'react';
import Select from "../Select/Select";
import { Container, StatsWrapper, Wrapper } from "./Weapon.style";
import StatCalculator from "../StatCalculator/StatCalculator";
import Text from "../Text/Text";
import StatisticGenericWrapper from "../StatisticGenericWrapper/StatisticGenericWrapper";
import useEquipment from "../../hooks/useEquipment";
import weaponService from "../../services/weaponService";
import weaponTypeService from "../../services/weaponTypeService";

const Weapon = ({ label, weapon, playerId, field = 'firstWeapon' }) => {

  const { equipmentList: weaponList, equipmentTypeList: weaponTypeList, getEquipmentPropValue: getValue, onResetEquipmentType: onResetEquipment } = useEquipment('weaponList', 'weaponTypeList', weaponService, weaponTypeService, weapon, playerId, field);

  const weaponOptions = weaponList.filter(w => w.typeId === weapon.typeId);

  return <Container>
    <Text margin='0px 6px 0px 0px'>{label}:</Text>
    <StatsWrapper>
      <Wrapper>
        <StatisticGenericWrapper
          selected={weapon.typeId}
          field={`equipment.${field}.typeId`}
          playerId={playerId}
          options={weaponTypeList}
          customOnChange={onResetEquipment}
          Component={Select}
        />
        <StatisticGenericWrapper
          selected={weapon.equipmentId}
          field={`equipment.${field}.equipmentId`}
          playerId={playerId}
          options={weaponOptions}
          Component={Select}
        />
      </Wrapper>
      <StatisticGenericWrapper
        key={`dmg-${field}`}
        value={getValue('dmg') + weapon.custom.dmg}
        field={`equipment.${field}.custom.dmg`}
        playerId={playerId}
        label="DMG"
        margin='0px 6px 0px 12px'
        Component={StatCalculator}
      />
      <StatisticGenericWrapper
        key={`wev-${field}`}
        value={getValue('wev') + weapon.custom.wev}
        field={`equipment.${field}.custom.wev`}
        playerId={playerId}
        label="Wev"
        margin='0px 6px 0px 6px'
        Component={StatCalculator}
      />
      <StatisticGenericWrapper
        key={`wp-${field}`}
        value={getValue('wp') + weapon.custom.wp}
        field={`equipment.${field}.custom.wp`}
        playerId={playerId}
        label="WP"
        margin='0px 6px 0px 6px'
        Component={StatCalculator}
      />
    </StatsWrapper>
  </Container>
};
export default Weapon;
