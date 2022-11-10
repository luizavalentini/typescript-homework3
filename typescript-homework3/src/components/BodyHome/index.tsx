import React from "react";
import {
  Container,
  Title,
  Subtitle,
  Hamid,
  Login,
  LoginContainer,
  DifferentAcount,
  ButtonLogin,
  SpaceHr,
  ProfileWelcome,
  WelcomeBack,
  WelcomeName,
  ProfileWelcomeConatiner,
  DivButton,
  Splash,
  Logo,
  Menu,
  Social,
} from "./styles";
import splash from "../../assets/splash.png";
import hamid from "../../assets/hamid.png";
import next from "../../assets/next.png";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import social from "../../assets/social.png";

const BodyHome: React.FC = () => {
  return (
    <Container>
        <Splash src={splash}></Splash>
        <Logo src={logo}></Logo>
        <Menu src={menu}></Menu>
        <Social src={social}></Social>
      <Login>
        <Title>Login</Title>
        <Subtitle>Please select your account</Subtitle>
        <ProfileWelcome>
          <Hamid src={hamid}></Hamid>
          <ProfileWelcomeConatiner>
             <WelcomeBack>Welcome back,</WelcomeBack>
          <WelcomeName>Hamid</WelcomeName>
          </ProfileWelcomeConatiner>
        </ProfileWelcome>
        <LoginContainer>
          <DifferentAcount>Login to a different account</DifferentAcount>
          <ButtonLogin>
          Login
            <DivButton>
            <img src={next}></img>
            </DivButton>
          </ButtonLogin>
        </LoginContainer>
        <SpaceHr></SpaceHr>
        <LoginContainer>
          <Subtitle>Don’t haven an account?</Subtitle>
          <DifferentAcount>Login to your account</DifferentAcount>
        </LoginContainer>
      </Login>
    </Container>
  );
};

export default BodyHome;
