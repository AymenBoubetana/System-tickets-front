import React from 'react'
import { Navbar,Nav } from 'react-bootstrap'
import logo from '../../assets/images/DGMLOGO.jpeg'
import './Header.css'
const Header = () => {
  return (
    <Navbar collapseOnSelect id='Navbar__'  variant="dark" expand="md" className='p-3'>
      <Navbar.Brand>
        <img src={logo} alt="logo" width="50px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" id='toggle' />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" id="nav_links">
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/tickets">Tickets</Nav.Link>
          <Nav.Link href="/logout">Deconnexion</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header