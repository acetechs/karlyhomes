import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Example from "./Sidenav";
import Dropdown from "react-bootstrap/Dropdown";
// import Product from "../pages/Product";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary ">
      <Container className="nav-cont">
        <Navbar.Brand href="#home" className="logo">
          <img src={require("../images/logo-removebg-preview.png")} alt="" />
        </Navbar.Brand>

        <Nav className="navlinks">
          <ul className="d-flex list">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#footer">Contact Us</a>
            </li>

            <li>
              <Dropdown>
                <Dropdown.Toggle
                  variant="white"
                  className="fs-4"
                  id="dropdown-basic"
                >
                  <i class="bi bi-bag"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu className="toggle">
                  <Dropdown.Item href="/cabinet" className="fs-5 fst-italic ">
                    Cabinets
                  </Dropdown.Item>
                  <Dropdown.Item href="/washbasin" className="fs-5 fst-italic ">
                    Wash Basin
                  </Dropdown.Item>
                  <Dropdown.Item href="/wc" className="fs-5 fst-italic">
                    Closets
                  </Dropdown.Item>
                  <Dropdown.Item href="/jacuzzi" className="fs-5 fst-italic">
                    Jacuzzi / Bath tubs
                  </Dropdown.Item>
                  <Dropdown.Item href="/cubicles" className="fs-5 fst-italic">
                    Cubicles
                  </Dropdown.Item>
                 
                  <Dropdown.Item href="/showers" className="fs-5 fst-italic">
                    Shower sets
                  </Dropdown.Item>
                  <Dropdown.Item href="/mirror" className="fs-5 fst-italic">
                    Mirror acessories
                  </Dropdown.Item>
                  <Dropdown.Item href="/taps" className="fs-5 fst-italic">
                    Taps
                  </Dropdown.Item>
                  <Dropdown.Item href="/sinktap" className="fs-5 fst-italic">
                    Sink Tap
                  </Dropdown.Item>
                  <Dropdown.Item href="/waterheat" className="fs-5 fst-italic">
                    Water Heater
                  </Dropdown.Item>
                  <Dropdown.Item href="/sinks" className="fs-5 fst-italic">
                    Sinks
                  </Dropdown.Item>
                  <Dropdown.Item href="/doors" className="fs-5 fst-italic">
                    Doors
                  </Dropdown.Item>
                  <Dropdown.Item href="/oven" className="fs-5 fst-italic">
                    Heat Extractor/Oven
                  </Dropdown.Item>
                  <Dropdown.Item href="/kitchen" className="fs-5 fst-italic">
                    Kitchen accessories
                  </Dropdown.Item>
                  <Dropdown.Item href="/pipes" className="fs-5 fst-italic">
                    Pipes and Fittings
                  </Dropdown.Item>
                  <Dropdown.Item href="/lap" className="fs-5 fst-italic">
                    Lab Equipments
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          
          </ul>
        </Nav>

        <Example />
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
