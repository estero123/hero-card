import styled, { css } from 'styled-components';
import bg from '../../assets/tabBackground.jpg';

const Wrapper = styled.div`
position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  // bottom: 0;
  background: rgba(0,0,0, 0.55);
`;

const MainModal = styled.div`
  width: 1336px;
  background: url(${bg});
  z-index: 99;
  position: relative;
  left: calc(50% - 668px);
  top: calc(50% - 300px);
  -webkit-box-shadow: 0px 0px 56px 34px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 56px 34px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 56px 34px rgba(0,0,0,0.75);
  border-radius: 10px;
`;

const Ornament = styled.img`
  height: ${props => props.width || '100%'};
  width: ${props => props.width || '100%'};
    ${props => props.rotate && css`
    transform: ${props.rotate};
  `}
`;

const ModalContent = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const OrnamentsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  ${props => props.variant === 'bottom' && css`
    transform: rotateZ(180deg);
  `}
`;

const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 40px;
  width: 100%;
  left: 0px;
`;

const ModalTitleMark = styled.img`
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  left: 60px;
`;

const CloseButton = styled.div`
  font-size: 30px;
  position: absolute;
  right: 60px;
  cursor: pointer;
`;

export {
  Wrapper,
  Ornament,
  ModalContent,
  OrnamentsWrapper,
  ModalTitle,
  ModalTitleMark,
  CloseButton,
  TitleWrapper,
  MainModal
}
