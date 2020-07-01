import React from 'react';
import Modal from "../Modal/Modal";
import Weapon from "./Weapon";
import { Wrapper } from "./EquipmentModal.style";
import Shield from "./Shield";
import Accessory from "./Accessory";
import StandardEquipment from "./StandardEquipment";

const EquipmentModal = ({ isOpen, onClose, title} ) => {
  return <Modal isOpen={isOpen} onClose={onClose} title={title}>
    <Wrapper>
    <Weapon label='Weapon 1' />
    <Weapon label='Weapon 2' />
    <Shield label='Shield 1' />
    <Shield label='Shield 2'/>
    <StandardEquipment label='Head'/>
    <StandardEquipment label='Body'/>
    <Accessory label='Accessory' />
    </Wrapper>
  </Modal>
};

export default EquipmentModal;
