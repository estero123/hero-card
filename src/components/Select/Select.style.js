import styled, { css } from 'styled-components';

const StyledSelect = styled.select`
  ${props => props.margin && css`
    margin: ${props.margin};
  `}
`;

const StyledOption = styled.option`
`;
export {StyledSelect, StyledOption}
