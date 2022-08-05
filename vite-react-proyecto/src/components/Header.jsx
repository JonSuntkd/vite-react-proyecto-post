import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";
import Button from "react-bootstrap/Button";
import useUser from "./Context/LoginContext/Hooks/useContext";

function Header() {
  const { user, onLogout } = useUser();

  return (
    <>
      <Navbar bg="danger" expand="lg">
        <Container>
          <Navbar.Brand href="#home">( BP - Proyecto )</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/home" className="nav-link">
                 INICIO 
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/post" className="nav-link">
                  POST
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/product-admin" className="nav-link">
                  ADMINISTRACION
                </Link>
              </Nav.Link>
            </Nav>
            {user && (
              <Button variant="danger" onClick={() => onLogout()}>
                Usuario: {user.user}
              </Button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Header;
