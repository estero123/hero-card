import React  from 'react';
import Spinner from "../../../components/Loader/Spinner";
import EquipmentType from "../Equipment/EquipmentType";
import EquipmentList from "../Equipment/EquipmentList";
import weaponTypeService from "../../../services/weaponTypeService";
import useCRUD from "../../../hooks/useCRUD";
import weaponService from "../../../services/weaponService";
import Select from "../../../components/FormComponents/Select/Select";

const WeaponSettingsPage = () => {
  const {list: equipmentTypes, isLoaded: isEquipmentTypeLoaded, addItem: addWeaponType, deleteItem: deleteWeaponType, updateItem: updateWeaponType} = useCRUD(weaponTypeService);
  const {list: weaponList, isLoaded: isWeaponsLoaded, addItem: addWeapon, deleteItem: deleteWeapon, updateItem: updateWeapon} = useCRUD(weaponService);

  const weaponTypeMethods = {
    addItem: addWeaponType,
    deleteItem: deleteWeaponType,
    updateItem: updateWeaponType
  };

  const weaponMethods = {
    addItem: addWeapon,
    deleteItem: deleteWeapon,
    updateItem: updateWeapon
  };

  const formJson = [
    {
      label: 'Label',
      name: 'label',
      component: 'input',
      type: 'text',
      placeholder: 'Label',
      required: true
    },
    {
      label: 'Type',
      name: 'typeId',
      component: Select,
      options: equipmentTypes,
      placeholder: 'Type',
      required: false
    },
    {
      label: 'WP',
      name: 'wp',
      component: 'input',
      type: 'number',
      placeholder: 'WP',
      required: true
    },
    {
      label: 'WEV',
      name: 'wev',
      component: 'input',
      type: 'number',
      placeholder: 'WEV',
      required: true
    },
    {
      label: 'BR',
      name: 'br',
      component: 'input',
      type: 'number',
      placeholder: 'BR',
      required: true
    },
    {
      label: 'HP',
      name: 'hp',
      component: 'input',
      type: 'number',
      placeholder: 'HP',
      required: true
    },
    {
      label: 'FA',
      name: 'fa',
      component: 'input',
      type: 'number',
      placeholder: 'FA',
      required: true
    },
    {
      label: 'SP',
      name: 'sp',
      component: 'input',
      type: 'number',
      placeholder: 'SP',
      required: true
    },
    {
      label: 'PA',
      name: 'pa',
      component: 'input',
      type: 'number',
      placeholder: 'PA',
      required: true
    },
    {
      label: 'DMG',
      name: 'dmg',
      component: 'input',
      type: 'number',
      placeholder: 'DMG',
      required: true
    },
    {
      label: 'MA',
      name: 'ma',
      component: 'input',
      type: 'number',
      placeholder: 'MA',
      required: true
    },
    {
      label: 'Description',
      name: 'description',
      component: 'input',
      type: 'text',
      placeholder: 'Description'
    },
  ];

  return (
    <>
      <h2>Weapon Settings</h2>
      <Spinner isLoaded={isEquipmentTypeLoaded}>
        <EquipmentType methods={weaponTypeMethods} types={equipmentTypes}/>
      </Spinner>
      <Spinner isLoaded={isEquipmentTypeLoaded && isWeaponsLoaded}>
        <EquipmentList formJson={formJson} types={equipmentTypes} list={weaponList} methods={weaponMethods}/>
      </Spinner>
    </>
  )
};

export default WeaponSettingsPage;
