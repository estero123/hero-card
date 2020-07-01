import styled from 'styled-components';
import basicStatBg from './../../BasicStat/basicStatBg.png';
import advancedStat from './../../../components/AdvancedStat/advancedStatBg.png';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Wrapper = styled.div`
    background: url(${basicStatBg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 84px;
    width: 140px;
    display: flex;
    justify-content: center;
`;

const PlayerNameContainer = styled.div`
    position: relative;
    top: 25px;
`;

const PlayerDamageWrapper = styled.div`
    background: url("${advancedStat}");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 87px;
    width: 399px;
    display: flex;
    justify-content: center;
`;

const PlayerDamageCalculatorWrapper = styled.div`
  margin-top: 20px;
`;

export { Wrapper, PlayerNameContainer, PlayerDamageWrapper, Container, PlayerDamageCalculatorWrapper }
