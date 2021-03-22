import React from 'react';
import AdminModal from "../../../components/AdminModal/AdminModal";
import { SingleField } from "../../../components/AdminModal/AdminModal.style";
import { Field } from "react-final-form";
import usePlayerType from "../../../hooks/usePlayerType";

const commonValues = ['hp', 'ma', 'mp', 'pa', 'sp'];

const RenderPlayerTypeCheckbox = (type, key) => {
  const { id: playerType, label: playerTypeLabel } = type;
  return (
    <SingleField key={`${key}-${playerTypeLabel}`}>
      <label>{playerTypeLabel}</label>:
      <Field
        name={`allowedPlayerTypes.${playerType}`}
        component='input'
        type='checkbox'
        placeholder={playerTypeLabel}/>
    </SingleField>
  );
};

const RenderCField = (v, key) => {
  return (
    <SingleField key={`c.${v}-${key}`}>
      <label>{v}</label>:
      <Field
        name={`c.${v}`}
        component='input'
        type='number'
        step='1'
        required={true}
        min={1}
        placeholder={`C - ${v}`}/>
    </SingleField>
  )
};

const RenderMultiplierField = (v, key) => {
  return (
    <SingleField key={`multipliers.${v}-${key}`}>
      <label>{v}</label>:
      <Field
        name={`multipliers.${v}`}
        component='input'
        type='number'
        step='1'
        min={1}
        required={true}
        placeholder={`Multiplier - ${v}`}/>
    </SingleField>
  )
};

const PlayerJobModal = ({ isOpen, onClose, onSubmit, initialValues }) => {

  const { playerTypeList } = usePlayerType();

  return <AdminModal
    title="Player Job Modal"
    isOpen={isOpen}
    onSubmit={onSubmit}
    customContent={true}
    onClose={onClose}
    initialValues={initialValues}>
    <SingleField key='label'>
      <label>Label</label>:
      <Field
        name='label'
        component='input'
        type='text'
        required={true}
        placeholder='Label'/>
    </SingleField>
    <SingleField key='cev'>
      <label>CEV</label>:
      <Field
        name='cev'
        component='input'
        type='number'
        step='1'
        min={1}
        required={true}
        placeholder='CEV'/>
    </SingleField>
    <SingleField key='jump'>
      <label>Jump</label>:
      <Field
        name='jump'
        component='input'
        type='number'
        step='1'
        min={1}
        required={true}
        placeholder='Jump'/>
    </SingleField>
    <SingleField key='move'>
      <label>Move</label>:
      <Field
        name='move'
        component='input'
        type='number'
        step='1'
        min={1}
        required={true}
        placeholder='Move'/>
    </SingleField>
    <h3>Allowed for:</h3>
    {(playerTypeList || []).map(RenderPlayerTypeCheckbox)}
    <h3>C</h3>
    {commonValues.map(RenderCField)}
    <h3>Multiplier</h3>
    {commonValues.map(RenderMultiplierField)}
  </AdminModal>
};

export default PlayerJobModal;
