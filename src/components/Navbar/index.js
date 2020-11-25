import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color='dark' light expand='md'>
        <NavbarBrand>
          <Link to='/'>Home</Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem></NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Gerenciamento
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to='/configuration'>Gerenciamento</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Sair</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
