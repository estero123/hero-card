import styled, { css } from 'styled-components';

const Column = styled.div`
  display: flex;
  flex-direction: column;
  ${props => props.overflow && css`
    overflow: ${props.overflow};
  `}
    ${props => props.height && css`
    height: ${props.height};
  `}
    ${props => props.width && css`
    width: ${props.width};
  `}
  ${props => props.alignItems && css`
    align-items: ${props => props.alignItems};
  `}
  ${props => props.margin && css`
    margin: ${props.margin};
  `}
`;

export default Column;
