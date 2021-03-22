import React, { useState } from 'react';
import useZodiacSign from "../../../hooks/useZodiacSign";
import ResponsiveTable from "../../../components/ResponsiveTable/ResponsiveTable";
import Spinner from "../../../components/Loader/Spinner";
import ZodiacSignModal from "./ZodiacSignModal";
import { AddButton } from "../GenderSettingsPage/GenderSettingsPage.style";


const ZodiacSignSettingsPage = () => {
  const { zodiacSignList, isLoaded, addZodiacSign, deleteZodiacSign, updateZodiacSign } = useZodiacSign();
  const [isZodiacSignModalOpen, setZodiacSignModalOpen] = useState(false);
  const [initialValues, setInitialValues] = useState({});

  const handleAddZodiacSign = React.useCallback(async zodiacSign => {
    await addZodiacSign(zodiacSign);
    setInitialValues({});
    setZodiacSignModalOpen(false);
  }, [addZodiacSign, setZodiacSignModalOpen]);

  const handleUpdateZodiacSign = React.useCallback(async zodiacSign => {
    await updateZodiacSign(zodiacSign);
    setInitialValues({});
    setZodiacSignModalOpen(false);
  }, [updateZodiacSign, setZodiacSignModalOpen]);

  const triggerUpdateZodiacSign = React.useCallback(data => {
    setInitialValues(data);
    setZodiacSignModalOpen(true);
  }, []);

  const ActionsCell = ({data}) => {
    return <div key={data.id}>
      <button onClick={() => triggerUpdateZodiacSign(data)}>Edit</button>
      <button onClick={() => deleteZodiacSign(data.id)}>Delete</button>
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
      label: 'Value',
      accessor: 'value'
    },
    {
      label: "Actions",
      accessor: '',
      customCell: ActionsCell
    }
  ];

  const toggleZodiacSignModal = () => setZodiacSignModalOpen(isOpen => !isOpen);

  return (
    <>
      <h2>Zodiac Sign Settings</h2>
      <Spinner isLoaded={isLoaded}>
        <AddButton onClick={toggleZodiacSignModal}>add zodiac</AddButton>
        <ResponsiveTable list={zodiacSignList} columns={columns}/>
        <ZodiacSignModal initialValues={initialValues} onSubmit={initialValues.id ? handleUpdateZodiacSign : handleAddZodiacSign} isOpen={isZodiacSignModalOpen} onClose={() => setZodiacSignModalOpen(false)}/>
      </Spinner>
    </>
  )
};

export default ZodiacSignSettingsPage
