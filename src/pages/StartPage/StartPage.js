import React from 'react';
import './../../App.css';
import Container from "../../components/Container/Container";
import Background from "../../components/Background/Background";
import Text from "../../components/Text/Text";
import { ButtonWrapper, TitleTextWrapper, TitleWrapper } from "./StartPage.style";
import OrnamentButton from "../../components/OrnamentButton/OrnamentButton";
import StyledLink from "../../components/StyledLink/StyledLink";

const StartPage = () => {



  return <Background>
    <Container width='100%' height='100vh' alignItems='center' justifyContent='center' variant='column'>
      <TitleWrapper>
        <TitleTextWrapper>
        <Text variant='app-title'>HeroCard</Text>
        </TitleTextWrapper>
      </TitleWrapper>
      <ButtonWrapper>
        <StyledLink to="/setup">
      <OrnamentButton>
        <Text>NEW GAME</Text>
      </OrnamentButton>
        </StyledLink>
        <OrnamentButton disabled={true}><Text>LOAD GAME</Text></OrnamentButton>
        <OrnamentButton disabled={true}><Text>CREDITS</Text></OrnamentButton>
      </ButtonWrapper>
    </Container>
  </Background>
};

export default React.memo(StartPage);
