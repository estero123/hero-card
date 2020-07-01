import styled from 'styled-components';
import titleBg from './titleBg.png';

const TitleWrapper = styled.div`
  font-weight: normal;
  align-content: center;
  background: url(${titleBg});
  background-size: cover;
  width: ${props => props.width || '624px'};
  height: ${props => props.height || '451px'};
`;

const TitleTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 36px;
`;

const ButtonWrapper = styled.div`
  margin-top: -180px;
  display: flex;
  flex-direction: column;
`;

export { TitleWrapper, ButtonWrapper, TitleTextWrapper }
