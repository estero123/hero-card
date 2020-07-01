import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  display: flex;  
  align-items: center;
  ${props => props.margin && css`
    margin: ${props.margin};
  `}
`;

export { Wrapper }
