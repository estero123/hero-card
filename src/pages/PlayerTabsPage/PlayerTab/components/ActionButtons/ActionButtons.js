import React, { useState } from 'react';
import Button from "../../../../../components/Button/Button";
import EquipmentModal from "../../../../../components/EquipmentModal/EquipmentModal";
import MagickModal from "../../../../../components/MagickModal/MagickModal";
import Container from "../../../../../components/Container/Container";

const ActionButtons = ({ equipment, playerId }) => {

  const [isModalEquipmentOpen, setModalEquipmentOpen] = useState(false);
  const [isModalMagickOpen, setModalMagickOpen] = useState(false);

  const toggleEquipment = () => setModalEquipmentOpen(isOpen => !isOpen);
  const toggleMagick = () => setModalMagickOpen(isOpen => !isOpen);

  return <Container>
    <Button>reset top</Button>
    <Button>save card state</Button>
    <Button>K.O</Button>
    <Button onClick={toggleEquipment}>Equipment</Button>
    <Button onClick={toggleMagick}>Magick</Button>
    <EquipmentModal equipment={equipment} playerId={playerId} isOpen={isModalEquipmentOpen} title="Equipment" onClose={() => setModalEquipmentOpen(false)}/>
    <MagickModal isOpen={isModalMagickOpen} title="Magick" onClose={() => setModalMagickOpen(false)}/>
  </Container>
};

export default React.memo(ActionButtons);
