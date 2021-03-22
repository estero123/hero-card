import React from 'react';
import Spinner from "../../../components/Loader/Spinner";
import useCRUD from "../../../hooks/useCRUD";
import shieldService from "../../../services/shieldService";
import EquipmentList from "../Equipment/EquipmentList";

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
    label: 'PSev',
    name: 'psEv',
    component: 'input',
    type: 'number',
    placeholder: 'PSEV',
    required: true
  },
  {
    label: 'MSev',
    name: 'msEv',
    component: 'input',
    type: 'number',
    placeholder: 'MSEV',
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
  }
];

const ShieldSettingsPage = () => {
  const { list, isLoaded, addItem, deleteItem, updateItem } = useCRUD(shieldService);

  const shieldMethods = {
    addItem,
    deleteItem,
    updateItem
  };

  return (
    <>
      <h2>Shield Settings</h2>
      <Spinner isLoaded={isLoaded}>
        <EquipmentList formJson={formJson} types={[]} extraColumns={[]} list={list} methods={shieldMethods} renderTypeFilter={false} />
      </Spinner>
    </>
  )
};

export default ShieldSettingsPage;
