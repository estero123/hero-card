import React from 'react';
import Spinner from "../../../components/Loader/Spinner";
import useCRUD from "../../../hooks/useCRUD";
import Select from "../../../components/FormComponents/Select/Select";
import accessoryTypeService from "../../../services/accessoryTypeService";
import accessoryService from "../../../services/accessoryService";
import EquipmentType from "../Equipment/EquipmentType";
import EquipmentList from "../Equipment/EquipmentList";

const AccessorySettingsPage = () => {
  const { list: equipmentTypes, isLoaded: isEquipmentTypeLoaded, addItem: addEquipmentType, deleteItem: deleteEquipmentType, updateItem: updateEquipmentType } = useCRUD(accessoryTypeService);
  const { list: equipmentList, isLoaded: isEquipmentLoaded, addItem: addEquipment, deleteItem: deleteEquipment, updateItem: updateEquipment } = useCRUD(accessoryService);

  const typeMethods = {
    addItem: addEquipmentType,
    deleteItem: deleteEquipmentType,
    updateItem: updateEquipmentType
  };

  const listMethods = {
    addItem: addEquipment,
    deleteItem: deleteEquipment,
    updateItem: updateEquipment
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
      label: 'MP',
      name: 'mp',
      component: 'input',
      type: 'number',
      placeholder: 'MP',
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
      label: 'MA',
      name: 'ma',
      component: 'input',
      type: 'number',
      placeholder: 'MA',
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
      label: 'PAEV',
      name: 'paEv',
      component: 'input',
      type: 'number',
      placeholder: 'PAEV',
      required: true
    },
    {
      label: 'MAEV',
      name: 'maEv',
      component: 'input',
      type: 'number',
      placeholder: 'MAEV',
      required: true
    },
    {
      label: 'Move',
      name: 'move',
      component: 'input',
      type: 'number',
      placeholder: 'Move',
      required: true
    },
    {
      label: 'JUMP',
      name: 'jump',
      component: 'input',
      type: 'number',
      placeholder: 'JUMP',
      required: true
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
      label: 'DMG',
      name: 'dmg',
      component: 'input',
      type: 'number',
      placeholder: 'DMG',
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
      <h2>Accessory Settings</h2>
      <Spinner isLoaded={isEquipmentLoaded}>
        <EquipmentType methods={typeMethods} types={equipmentTypes}/>
      </Spinner>
      <Spinner isLoaded={isEquipmentTypeLoaded && isEquipmentLoaded}>
        <EquipmentList formJson={formJson} types={equipmentTypes} list={equipmentList} methods={listMethods}/>
      </Spinner>
    </>
  )
};

export default AccessorySettingsPage;
