import React, { useState } from 'react';
import usePlayerType from "../../../hooks/usePlayerType";
import ResponsiveTable from "../../../components/ResponsiveTable/ResponsiveTable";
import Spinner from "../../../components/Loader/Spinner";
import PlayerTypeModal from "./PlayerTypeModal";
import { AddButton } from "../GenderSettingsPage/GenderSettingsPage.style";


const PlayerTypeSettingsPage = () => {
  const { playerTypeList, isLoaded, addPlayerType, deletePlayerType, updatePlayerType } = usePlayerType();
  const [isPlayerTypeModalOpen, setPlayerTypeModalOpen] = useState(false);
  const [initialValues, setInitialValues] = useState({});

  const handleAddPlayerType = React.useCallback(async PlayerType => {
    await addPlayerType(PlayerType);
    setInitialValues({});
    setPlayerTypeModalOpen(false);
  }, [addPlayerType, setPlayerTypeModalOpen]);

  const handleUpdatePlayerType = React.useCallback(async PlayerType => {
    await updatePlayerType(PlayerType);
    setInitialValues({});
    setPlayerTypeModalOpen(false);
  }, [updatePlayerType, setPlayerTypeModalOpen]);

  const triggerUpdatePlayerType = React.useCallback(data => {
    setInitialValues(data);
    setPlayerTypeModalOpen(true);
  }, []);

  const ActionsCell = ({data}) => {
    return <div key={data.id}>
      <button onClick={() => triggerUpdatePlayerType(data)}>Edit</button>
      <button onClick={() => deletePlayerType(data.id)}>Delete</button>
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

  const togglePlayerTypeModal = () => setPlayerTypeModalOpen(isOpen => !isOpen);

  return (
    <>
      <h2>Player Type Settings</h2>
      <Spinner isLoaded={isLoaded}>
        <AddButton onClick={togglePlayerTypeModal}>add type</AddButton>
        <ResponsiveTable list={playerTypeList} columns={columns}/>
        <PlayerTypeModal initialValues={initialValues} onSubmit={initialValues.id ? handleUpdatePlayerType : handleAddPlayerType} isOpen={isPlayerTypeModalOpen} onClose={() => setPlayerTypeModalOpen(false)}/>
      </Spinner>
    </>
  )
};

export default PlayerTypeSettingsPage
