import React from 'react';
import Text from "../../Text/Text";
import {
  Container,
  PlayerDamageCalculatorWrapper,
  PlayerDamageWrapper,
  PlayerNameContainer,
  Wrapper
} from "./PlayerMagickRow.style";
import Calculator from "../../Calculator/Calculator";
import Select from "../../Select/Select";
import Button from "../../Button/Button";

const options = [
  {
    label: 'Option 1',
    value: 'O-1'
  }
];

const PlayerMagickRow = ({ playerName }) => {
  return <Container>
    <Wrapper>
    <PlayerNameContainer>
      <Text>{playerName}</Text>
    </PlayerNameContainer>
  </Wrapper>
    <PlayerDamageWrapper>
      <PlayerDamageCalculatorWrapper>
      <Calculator label='Damage' />
      </PlayerDamageCalculatorWrapper>
    </PlayerDamageWrapper>
    <PlayerDamageWrapper>
      <PlayerDamageCalculatorWrapper>
        <Calculator label='Magick hit' />
      </PlayerDamageCalculatorWrapper>
    </PlayerDamageWrapper>
    <Wrapper>
      <PlayerNameContainer>
        <Select options={options} />
      </PlayerNameContainer>
    </Wrapper>
    <Button>Attack!</Button>
    </Container>
};
export default PlayerMagickRow
