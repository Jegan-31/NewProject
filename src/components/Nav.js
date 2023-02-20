import React from "react";
import { Container, Navbar,Nav } from "react-bootstrap";
import { BiUser } from "react-icons/bi";

export const NavBar=()=>
{
    return(<div className="header">
    <Navbar bg="light" className="bgcolorNav" variant="light">
    <Container  style={{marginLeft:'-7px'}}>
      <Navbar.Brand href="/" style={{fontSize:'35px',fontWeight:'700',color:' white'}}>Coding Mart</Navbar.Brand>
      <span style={{marginRight:'-58%',fontSize:'30px',color:' white'}}><BiUser/>User</span>
    </Container>
  </Navbar>
    </div>)
}