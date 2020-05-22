import React from 'react'
import Link from 'next/link'
import { Navbar, Nav, NavDropdown, Dropdown } from 'react-bootstrap'

const styles = {
  links: {
    fontColor: 'white'
  }
}

export default () => (
  <div>
    <Navbar bg='dark' bg='dark' variant='dark' expand='md'>
      <Navbar.Brand href='.'><img className='rounded-circle w-50 p-3 h-25 d-none d-md-block text-center' alt='100x100' src='/static/rsz_headshot.jpg/'/></Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link className='mx-auto d-md-block pr-lg-4 text-white' href='/'>Home</Nav.Link>
          <Nav.Link className='mx-auto d-md-block pr-lg-4 text-white' href='pdfs/Resume_Timothy_Ngo_Spring_2020.pdf/' target='_blank'>Resume</Nav.Link>
          <NavDropdown title={<span className='text-white'>Projects</span>} className='mx-auto d-md-block pr-lg-3' id='collasible-nav-dropdown'>
            <NavDropdown.Item>Crime and Dime</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item>Learnhub</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className='mx-auto d-md-block pr-lg-5 text-white' href='/about'>About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)
