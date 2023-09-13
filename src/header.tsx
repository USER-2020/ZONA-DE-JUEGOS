import { useState } from 'react';
import './header_style.css';
import { Collapse, Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';
// import { Link } from 'react-router-dom'; // Importa Link de React Router

const Header = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
  
    return (
      <div>
        <Navbar color="black" dark>
          <NavbarBrand href="/" className="me-auto navTitle">
            Candy Land Insights
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="me-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/">Inicio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/infoSustancias">
                  Información sustancias
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/eventos">
                  Eventos
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/playlist">
                  Playlist
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/multimedia">
                  Multimedia
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  

export default Header;
