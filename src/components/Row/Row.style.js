import styled, { css } from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  
  ${props => props.margin && css`
    margin: ${props.margin};
  `}
  
  ${props => props.alignItems && css`
    align-items: ${props => props.alignItems};
  `}
  
   ${props => props.justifyContent && css`
    justify-content: ${props => props.justifyContent};
  `}
  
   ${props => props.height && css`
    height: ${props.height};
  `}
  
`;

export default Row;
