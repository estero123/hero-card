import styled, { css } from 'styled-components';

const Paragraph = styled.p`
  font-family: Kuba_reczny;
  font-size: 18px;
  margin: 0px;
  padding: 0px;
  
  ${props => props.variant === 'big' && css`
    font-size: 24px;
  `}
  
   ${props => props.variant === 'app-title' && css`
    font-size: 90px;
  `}
  
   ${props => props.variant === 'app-title-middle' && css`
    font-size: 40px;
  `}
  
  ${props => props.color && css`
    color: ${props.color};
  `}
`;

const TextWrapper = styled.div`
  ${props => props.margin && css`
    margin: ${props.margin};
  `}
  
  
`;

export { Paragraph, TextWrapper }
