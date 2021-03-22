import React, { useState } from 'react';
import usePlayerGender from "../../../hooks/usePlayerGender";
import ResponsiveTable from "../../../components/ResponsiveTable/ResponsiveTable";
import Spinner from "../../../components/Loader/Spinner";
import GenderModal from "./GenderModal";
import { AddButton } from "./GenderSettingsPage.style";

const GenderSettingsPage = () => {
  const { genderList, isLoaded, addGender, deleteGender, updateGender } = usePlayerGender();
  const [isGenderModalOpen, setGenderModalOpen] = useState(false);
  const [initialValues, setInitialValues] = useState({});

  const handleAddGender = React.useCallback(async gender => {
    await addGender(gender);
    setInitialValues({});
    setGenderModalOpen(false);
  }, [addGender, setGenderModalOpen]);

  const handleUpdateGender = React.useCallback(async gender => {
    await updateGender(gender);
    setInitialValues({});
    setGenderModalOpen(false);
  }, [updateGender, setGenderModalOpen]);

  const triggerUpdateGender = React.useCallback(data => {
    setInitialValues(data);
    setGenderModalOpen(true);
  }, []);

  const ActionsCell = ({data}) => {
    return <div key={data.id}>
      <button onClick={() => triggerUpdateGender(data)}>Edit</button>
      <button onClick={() => deleteGender(data.id)}>Delete</button>
    </div>
  };

  const columns = [
    {
      label: 'ID',
      accessor: 'id'
    },
    {
      label: 'Label',
      accessor: 'label'
    },
    {
      label: "Actions",
      accessor: '',
      customCell: ActionsCell
    }
  ];

  const toggleGenderModal = () => {
    setInitialValues({});
    setGenderModalOpen(isOpen => !isOpen)
  };

  return (
    <>
      <h2>Gender Settings</h2>
      <Spinner isLoaded={isLoaded}>
        <AddButton onClick={toggleGenderModal}>add gender</AddButton>
        <ResponsiveTable list={genderList} columns={columns}/>
        <GenderModal initialValues={initialValues} onSubmit={initialValues.id ? handleUpdateGender : handleAddGender} isOpen={isGenderModalOpen} onClose={() => setGenderModalOpen(false)}/>
      </Spinner>
    </>
  )
};

export default GenderSettingsPage
