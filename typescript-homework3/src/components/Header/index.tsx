import React from "react";
import {
  Container,
  ContainerMenu,
  Dash,
  ContainerMenu2,
  ContainerMenu3,
  Options,
  ContainerInterno,
  ContainerInterno3,
  Button,
  ButtonImg,
  ProfileName,
  Logo,
  Menu,
} from "./styles";
import menuLogin from "../../assets/menu-login.svg";
import logo2 from "../../assets/logo-2.svg";
import dash from "../../assets/dashboard.png";
import bag from "../../assets/bag.png";
import solid from "../../assets/solid.png";
import solid2 from "../../assets/solid-2.png";
import notification from "../../assets/notification.png";
import menssagem from "../../assets/menssagem.png";
import peter from  "../../assets/peter.png"
import next from  "../../assets/next-2.png"

const Header: React.FC = () => {
  return (
    <Container>
      <ContainerMenu>
        <Menu  src={menuLogin}></Menu>
        <Logo src={logo2}></Logo>
      </ContainerMenu>
      <ContainerMenu2>
        <ContainerInterno>
          <Dash src={dash}></Dash>
          <Options>Dashboard</Options>
        </ContainerInterno>
        <ContainerInterno>
          <Dash src={bag}></Dash>
          <Options>Bussiness</Options>
        </ContainerInterno>
        <ContainerInterno>
          <Dash src={solid}></Dash>
          <Options>Tickets</Options>
        </ContainerInterno>
        <ContainerInterno>
          <Dash src={solid2}></Dash>
          <Options>Payments</Options>
        </ContainerInterno>
      </ContainerMenu2>
      <ContainerMenu3>
        <ContainerInterno3>
             <Dash src={notification}></Dash>
        <Dash src={menssagem}></Dash>
        </ContainerInterno3>
        <Button>
        <ButtonImg src={peter}></ButtonImg>
        <ProfileName>peter</ProfileName>
        <img src={next}></img>
        </Button>
      </ContainerMenu3>
    </Container>
  );
};
export default Header;
