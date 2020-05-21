import React from 'react'
import Link from 'next/link'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

export default () => (
  <div>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href='.'>LOL</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav>
          <Nav.Link href='/about'><h2>Hi</h2></Nav.Link> 
          <NavDropdown title="News" id='collasible-nav-dropdown'>
          <NavDropdown.Item>Business</NavDropdown.Item>
          <NavDropdown.Divider/>
          <NavDropdown.Item>Technology</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)
{/* <Link href='/about' as={ process.env.BACKEND_URL + '/about'}><h1>About</h1> </Link>  */}
