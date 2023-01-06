import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { ReactComponent as Logo } from "../images/logo.svg";

const navbarStyle = {
  backgroundColor: "lightgrey",
};

const Header = (title) => {
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <a href="/">
          <Logo
            alt={title}
            style={{
              marginBottom: "15px",
              marginTop: "15px",
              maxWidth: "30rem",
              maxHeight: "3rem",
            }}
          />
        </a>
      </Container>
    </Navbar>
  );
};

export default Header;
