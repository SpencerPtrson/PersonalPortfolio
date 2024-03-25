import { Container, Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-bootstrap";

export default function MainNav() {
  return (
    <>
      <Navbar expand="lg" className="bg-dark navbar-dark sticky-top">
        <Container fluid>
          <Navbar.Brand href="/">Spencer Peterson</Navbar.Brand>

          <NavLink key={"github"} href="https://github.com/SpencerPtrson">
            GitHub
          </NavLink>
          <NavLink
            key={"linkedin"}
            href="https://www.linkedin.com/in/spencer-peterson-9a81b6198/"
          >
            LinkedIn
          </NavLink>
        </Container>
      </Navbar>
    </>
  );
}
