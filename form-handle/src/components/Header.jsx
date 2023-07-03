import React from 'react'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'

 const Header = () => {
  return (
    <React.Fragment>
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">User Registration</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
    </React.Fragment>
  )
}
export default Header;