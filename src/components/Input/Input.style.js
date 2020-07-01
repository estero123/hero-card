import styled, { css } from 'styled-components';

const StyledInput = styled.input`
  ${props => props.width && css`
    width: ${props.width};
  `}
  ${props => props.height && css`
    width: ${props.height};
  `}
  ::placeholder {
    text-align: center;
  }
  margin-left: 3px;
  margin-right: 3px;
  
  ${props => props.margin && css`
    margin: ${props.margin};
  `}
`;

export { StyledInput }
