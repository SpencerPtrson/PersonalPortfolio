import { Container, Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-bootstrap";

export default function MainNav() {
  return (
    <>
      <Navbar expand="lg" className="bg-dark navbar-dark sticky-top">
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="#">
                Spencer Peterson
              </a>
            </div>
            <ul class="nav navbar-nav">
              <li class="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="https://github.com/SpencerPtrson">GitHub</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/spencer-peterson-9a81b6198/">
                  Linked In
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </Navbar>
    </>
  );
}
