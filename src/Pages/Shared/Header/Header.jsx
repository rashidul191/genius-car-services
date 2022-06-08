import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../images/logo.png";
import CustomLink from "../../CustomLink/CustomLink";

const Header = () => {
  return (
    <header>
      {/* <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              {" "}
              <img
                src={Logo}
                height="30"
                className="d-inline-block align-top"
                alt=""
              />
            </Link>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link className="mx-3">
              {" "}
              <CustomLink to="/home">Home</CustomLink>
            </Nav.Link>

            <Nav.Link className="mx-3">
              {" "}
              <CustomLink to="/about">About</CustomLink>
            </Nav.Link>

            <Nav.Link className="mx-3">
              {" "}
              <CustomLink to="/pricing">Pricing</CustomLink>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}

      <Navbar collapseOnSelect expand="lg" sticky="top" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>
            {" "}
            <Link to="/">
              {" "}
              <img
                src={Logo}
                height="30"
                className="d-inline-block align-top"
                alt=""
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="mx-3">
                {" "}
                <CustomLink to="/home">Home</CustomLink>
              </Nav.Link>
              <Nav.Link className="mx-3">
                {" "}
                <CustomLink to="/about">About</CustomLink>
              </Nav.Link>

              <Nav.Link className="mx-3">
                {" "}
                <CustomLink to="/pricing">Pricing</CustomLink>
              </Nav.Link>

              <Nav.Link className="mx-3">
                {" "}
                <CustomLink to="/login">Login</CustomLink>
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
