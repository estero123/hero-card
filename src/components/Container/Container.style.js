import styled, { css } from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  ${props => props.margin && css`
    margin: ${props.margin};
  `}
  
  flex-direction: row;
  ${props => props.variant === 'column' && css`
    flex-direction: column;
  `}
  flex-wrap: ${props => props.noWrap === true ? 'nowrap' : 'wrap'};
  
  ${props => props.alignItems && css`
    align-items: ${props.alignItems};
  `}
   
  ${props => props.width && css`
    width: ${props.width};
  `}
  
   ${props => props.height && css`
    height: ${props.height};
  `}
  
  ${props => props.justifyContent && css`
    justify-content: ${props.justifyContent};
  `}
`;

export { StyledContainer }
