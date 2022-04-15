import React from "react";
import "./Header.css";
import logo from "../../images/logo2.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const logOut = () =>{
    signOut(auth);
  }
  console.log(user);
  return (
    <Navbar className="p-3" collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          <img src={logo} height={40} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="link me-4" as={Link} to="login">
              Login
            </NavLink>
            <NavLink className="link-active" as={Link} to="signup">
              Sign Up
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        {user?.uid &&
          <button onClick={logOut} className="link-active">Log Out</button>
        }
      </Container>
    </Navbar>
  );
};

export default Header;
