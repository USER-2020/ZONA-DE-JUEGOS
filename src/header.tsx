import { useState } from 'react';
import './header_style.css';
import { Collapse, Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';
import { Link } from 'react-router-dom'; // Importa Link de React Router

const Header = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
            <Navbar color="black" dark>
                <NavbarBrand tag={Link} to="/" className="me-auto navTitle">
                    Candy Land Insights
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="me-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/">Inicio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/infoSustancias">
                                Información sustancias
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/eventos">
                                Eventos
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/playlist">
                                Playlist
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/multimedia">
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
