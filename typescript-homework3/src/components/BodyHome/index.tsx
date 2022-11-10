import React from "react";
import {
  Container,
  Title,
  Subtitle,
  Hamid,
  ContainerImg,
  Login,
  LoginContainer,
  DifferentAcount,
  ButtonLogin,
  SpaceHr,
  ProfileWelcome,
  WelcomeBack,
  WelcomeName,
  ProfileWelcomeConatiner,
} from "./styles";
import splash from "../../assets/splash.png";
import hamid from "../../assets/hamid.png";
import logo from "../../assets/logo.png";
import { GrNext } from "react-icons/gr";

const BodyHome: React.FC = () => {
  return (
    <Container>
      <ContainerImg>
        <img src={splash}></img>
      </ContainerImg>
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
            Login<GrNext></GrNext>
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
