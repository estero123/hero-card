import styled from 'styled-components';

const BarLabel = styled.label`
    margin-right: 5px;
    width: 55px;
`;

const Bar = styled.progress`
&&-webkit-progress-bar {
  background-color: red;
}
&&-webkit-progress-value {
  background-color: red;
}

&&-moz-progress-bar {
  background-color: red;
}
`;

export {BarLabel, Bar};
