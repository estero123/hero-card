import styled from 'styled-components';

const TypeWrapper = styled.div`
  h3, h4, h5 {
    margin: 0 3px 0 0;
  }
  
  h4 {
    border-bottom: 1px solid gray;
  }
  
  h5 {
    width: 70px;
  }
`;

const MinMaxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 5px 0;
  align-items: center;
`;

const TypeFieldWrapper = styled.div`
  background-color: ${props => props.index % 2 === 0 ? '#E0E0E0' : 'white'};
  margin-left: 15px;
`;

export { TypeWrapper, MinMaxWrapper, TypeFieldWrapper }
