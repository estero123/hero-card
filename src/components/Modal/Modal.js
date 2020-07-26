import React, { useEffect } from 'react';
import {
  CloseButton,
  MainModal,
  ModalContent,
  ModalTitle,
  ModalTitleMark,
  Ornament,
  OrnamentsWrapper,
  TitleWrapper,
  Wrapper
} from "./Modal.style";
import { createPortal } from "react-dom";
import ornTopLeft from './ornTopLeft.png';
import ornBottom from './ornBottom.png';
import ornSide from './ornSide.png';
import modalTitleMark from './modalTitleMark.png';
import Text from "../Text/Text";

const modalRoot = document.getElementById('modal-root');

const Ornaments = ({ variant }) => {
  return <OrnamentsWrapper variant={variant}>
    <Ornament src={ornTopLeft}/>
    <Ornament src={ornBottom}/>
    <Ornament rotate='rotateZ(91deg)' src={ornTopLeft}/>
  </OrnamentsWrapper>;
};

const Modal = ({ children, isOpen, onClose, title }) => {

    const element = document.createElement('div');

    const handleKeyUp = React.useCallback(e => {
      const keys = {
        27: () => {
          e.preventDefault();
          onClose();
          window.removeEventListener('keyup', handleKeyUp, false);
        },
      };

      if (keys[e.keyCode]) {
        keys[e.keyCode]();
      }
    }, [onClose]);

    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = '17px';
      }
      window.addEventListener('keyup', handleKeyUp, false);
      modalRoot.appendChild(element);
      return () => {
        document.body.style.overflow = 'auto';
        document.body.style.marginRight = '0px';
        window.removeEventListener('keyup', handleKeyUp, false);
        modalRoot.removeChild(element)
      };
    }, [element, isOpen, handleKeyUp]);

    return isOpen && createPortal(<Wrapper>
      <MainModal>
        <Ornaments/>
        <OrnamentsWrapper>
          <Ornament width='auto' src={ornSide}/>
          <ModalContent>
            <ModalTitle>
              <TitleWrapper>
                <ModalTitleMark src={modalTitleMark} alt='modalTitleMark'/>
                <Text variant='big'>{title}</Text>
              </TitleWrapper>
              <CloseButton onClick={() => onClose()}>X</CloseButton>
            </ModalTitle>
            {children}
          </ModalContent>
          <Ornament width='auto' src={ornSide}/>
        </OrnamentsWrapper>
        <Ornaments variant='bottom'/>
      </MainModal>
    </Wrapper>, element)
  }
;

export default React.memo(Modal);
