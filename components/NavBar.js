import React from 'react'
import Link from 'next/link'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

export default () => (
  <div>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href='.'>LOL</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className="ml-auto">
          <Nav.Link className="mx-auto" href="#">Hi</Nav.Link>
          <NavDropdown title="News" className="mx-auto" id='collasible-nav-dropdown'>
          <NavDropdown.Item>Business</NavDropdown.Item>
          <NavDropdown.Divider/>
          <NavDropdown.Item>Technology</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className="mx-auto" href="#">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)
{/* <Link href='/about' as={ process.env.BACKEND_URL + '/about'}><h1>About</h1> </Link>  */}
