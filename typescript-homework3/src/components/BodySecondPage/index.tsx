import React from "react";
import { Header } from "../Header";
import { Button, Container, Container2, Div, Panel, Title}  from "./styles";
import file from "../../assets/file.svg";
import { Subtitle } from "../BodyHome/styles";

const BodySecondPage: React.FC = () => {
    return (
       <Container>
        <Div>
            <Panel>
            <p>My Panel</p>
            <p>Ticket</p>
            <p>#invoice</p>
        </Panel>
        <Title>My Tickets</Title> 
        </Div>
        <Container2>
            <img src={file}></img>
            <Title>You do not have any tickets yet!</Title>
            <Subtitle>Send your first ticket from here.</Subtitle>
            <Button>ADD NEW TICKET</Button>
        </Container2>
       
        </Container>
    );
}
export default BodySecondPage;
