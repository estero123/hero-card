import React from 'react';
import AdminModal from "../../../components/AdminModal/AdminModal";

const formJson = [
  {
    label: 'Label',
    name: 'label',
    component: 'input',
    type: 'text',
    placeholder: 'Label'
  },
  {
    label: 'Value',
    name: 'value',
    component: 'input',
    type: 'text',
    placeholder: 'Value'
  }
];

const ZodiacSignModal = ({ isOpen, onClose, onSubmit, initialValues }) => {

  return <AdminModal
    title="Zodiac Sign Modal"
    isOpen={isOpen}
    onSubmit={onSubmit}
    formJson={formJson}
    onClose={onClose}
    initialValues={initialValues}
  />
};

export default ZodiacSignModal;
