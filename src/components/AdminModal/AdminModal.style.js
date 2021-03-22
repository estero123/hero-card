import styled from "styled-components";
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 1;
`;

const Title = styled.h2`
  margin: 0;
  padding: 10px;
`;

const Header = styled.div`
  width: 100%;
  height: 53px;
  border-bottom: 1px solid gray;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ModalButton = styled.button`
  margin: 10px;
`;

const FormContent = styled.form`
  width: 100%;
  height: calc(100% - 55px);
`;

const Content = styled.div`
  height: calc(100% - 50px);
  overflow-y: auto;
  overflow-wrap: break-word;
  display: flex;
  flex-direction: column;
`;

const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid gray;
  height: 50px;
`;

const SingleField = styled.div`
`;
export { Wrapper, Header, Title, ModalButton, FormContent, Footer, Content, SingleField }
