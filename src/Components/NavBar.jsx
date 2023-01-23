import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

function NavBar({ isMobile }) {
  return (
    <div>
      <Navbar
        style={{
          backgroundColor: "#f4f3ee",
          fontSize: "20px",
          fontWeight: "bolder",
          paddingLeft: isMobile ? "22%" : "0px",
        }}
      >
        <Container>
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/latest">
              <Nav.Link>Latest News</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
