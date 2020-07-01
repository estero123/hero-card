import styled, { css } from 'styled-components';
import ornSide from './ornSide.png';

const Separator = styled.div`
  background-image: url(${ornSide});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: ${props => (props.scale || 1) * 37}px;
  height: ${props => (props.scale || 1) * 362}px;
  
  ${props => props.variant === 'horizontal' && css`
    transform: rotateZ(91deg);
  `}
`;

export default Separator;
