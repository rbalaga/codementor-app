import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink
} from "reactstrap";

const AppNavbar = ({ isAuthenticated }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => setIsOpen(!isOpen);
  // const { firstName, lastName } = user;
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand>
        <Link>Authenticator</Link>
      </NavbarBrand>
      <NavbarToggler onClick={toggleNav} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          {!isAuthenticated ? (
            <>
              <NavItem>
                <NavLink>
                  <Link to="/login">Login</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/register">Register</Link>
                </NavLink>
              </NavItem>
            </>
          ) : (
            <NavItem>
              <NavLink>
                <Link to="/">Home</Link>
              </NavLink>
            </NavItem>
          )}
        </Nav>
        {isAuthenticated && (
          <NavLink>
            <Link to="/logout">Logout</Link>
          </NavLink>
        )}
      </Collapse>
    </Navbar>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps)(AppNavbar);
