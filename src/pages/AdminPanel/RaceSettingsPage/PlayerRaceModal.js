import React from 'react';
import AdminModal from "../../../components/AdminModal/AdminModal";
import { SingleField } from "../../../components/AdminModal/AdminModal.style";
import { Field } from "react-final-form";
import Spinner from "../../../components/Loader/Spinner";
import usePlayerGender from "../../../hooks/usePlayerGender";
import usePlayerType from "../../../hooks/usePlayerType";
import { MinMaxWrapper, TypeFieldWrapper, TypeWrapper } from "./PlayerRaceModal.style";

const minMaxCommonFields = ['min', 'max'];
const typeCommonFields = ['hp', 'ma', 'mp', 'pa', 'sp'];

const PlayerRaceModal = ({ isOpen, onClose, onSubmit, initialValues }) => {

  const { genderList } = usePlayerGender();
  const { playerTypeList } = usePlayerType();

  const CreateField = (type, key) => {
    const { id: playerType, label: playerTypeLabel } = type;
    return (
      <TypeWrapper key={key}>
        <h3>{playerTypeLabel}</h3>
        {typeCommonFields.map((typeField, index) => {
          return (
            <TypeFieldWrapper key={index} index={index}>
              <h4>{typeField}</h4>
              {genderList.map((gender, genderKey) => {
                const { id: genderValue, label: genderLabel } = gender;
                return (
                  <MinMaxWrapper key={genderKey}>
                    <h5>{genderLabel}</h5>
                    {minMaxCommonFields.map(minMaxField => {
                      return (
                        <SingleField key={`rawStats.${playerType}.${typeField}.${genderValue}.${minMaxField}`}>
                          <label>{`${minMaxField}`}</label>:
                          <Field
                            name={`rawStats.${playerType}.${typeField}.${genderValue}.${minMaxField}`}
                            component='input'
                            type='number'
                            step='1'
                            required={true}
                            min={1}
                            placeholder={`${playerTypeLabel} - ${typeField} - ${genderLabel}`}/>
                        </SingleField>
                      )
                    })}
                  </MinMaxWrapper>
                )
              })}
            </TypeFieldWrapper>
          )
        })
        }
      </TypeWrapper>
    )
  };

  return <AdminModal
    title="Player Race Modal"
    isOpen={isOpen}
    onSubmit={onSubmit}
    customContent={true}
    onClose={onClose}
    initialValues={initialValues}>
    <Spinner isLoaded={genderList && playerTypeList}>
      <SingleField key='label'>
        <label>Label</label>:
        <Field
          name='label'
          component='input'
          type='text'
          placeholder='Label'/>
      </SingleField>
      {playerTypeList && playerTypeList.map(CreateField)}
    </Spinner>
  </AdminModal>
};

export default PlayerRaceModal;
