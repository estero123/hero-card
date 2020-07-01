import React from 'react';
import SectionHeader from "../../../../../../components/SectionHeader/SectionHeader";
import AdvancedStat from "../../../../../../components/AdvancedStat/AdvancedStat";
import PlainButton from "../../../../../../components/PlainButton/PlainButton";
import StatCalculator from "../../../../../../components/StatCalculator/StatCalculator";
import Text from "../../../../../../components/Text/Text";
import { Container, Wrapper } from "./Evades.style";

const scale = 0.9;
const contentTop = '18px';

const Evades = () => {
  return <div>
    <SectionHeader title="Evades"/>
    <Container>
      <AdvancedStat scale={scale} contentTop={contentTop}><StatCalculator label='Front: 95'/></AdvancedStat>
      <AdvancedStat scale={scale} contentTop={contentTop}><StatCalculator label='Side: 95'/></AdvancedStat>
      <AdvancedStat scale={scale} contentTop={contentTop}><StatCalculator label='Back: 95'/></AdvancedStat>
      <Wrapper>
        <Text margin='0px 5px 0px 0px'>PP: 0.0</Text><PlainButton>Reset</PlainButton>
      </Wrapper>
    </Container>
  </div>
};

export default Evades;
