import styled, { css } from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: ${props => props.isMobile ? 'column' : 'row'};
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  border-left: 1px solid gray;
  padding-left: 15px;
  
  ${props => props.isMobile && css`
    width: 100%;
    border: 0;
    padding: 0;
  `}
`;

const MenuWrapper = styled.div`
  width: 15%;
  padding: 0 15px;
  
  ${props => props.isMobile && css`
    width: 100%;
    padding: 0;
  `}
`;

export { Section, Content, MenuWrapper }
