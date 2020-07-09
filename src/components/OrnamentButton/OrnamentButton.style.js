import styled, { css } from "styled-components";
import advancedStatBg from './../AdvancedStat/advancedStatBg.png';


const OrnamentStyledButton = styled.button`
  border: 0px;
  background: url(${advancedStatBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 85px;
  width: 404px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  ${props => props.disabled && css`
    opacity: 0.75;
    cursor: no-drop;
  `}
`;

const ButtonContentWrapper = styled.div`
  margin-top: ${props => props.isOpera ? '-20px' : '20px'};
`;

export { OrnamentStyledButton, ButtonContentWrapper };
