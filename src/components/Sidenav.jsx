import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="" onClick={handleShow} className="nav-btn">
        <img
          src={require("../images/menu__1_-removebg-preview.png")}
          alt=""
          className="menu-img"
        />
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Our Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="side-nav">
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/footer">Contact Us</a>
            </li>
            <li>
              <Dropdown>
                <Dropdown.Toggle
                  variant="white"
                  className="fs-2"
                  id="dropdown-basic"
                >
                  Products
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/cabinet" className="fs-5 fst-italic">
                    Cabinets
                  </Dropdown.Item>
                  <Dropdown.Item href="/washbasin" className="fs-5 fst-italic">
                    Wash Basin
                  </Dropdown.Item>
                  <Dropdown.Item href="/wc" className="fs-5 fst-italic">
                    Closets
                  </Dropdown.Item>
                  <Dropdown.Item href="/jacuzzi" className="fs-5 fst-italic">
                    Jacuzzi/Bath tubs
                  </Dropdown.Item>
                  <Dropdown.Item href="/cubible" className="fs-5 fst-italic">
                    Cubicles
                  </Dropdown.Item>
                  <Dropdown.Item href="/showers" className="fs-5 fst-italic">
                    Shower sets
                  </Dropdown.Item>
                  <Dropdown.Item href="/mirror" className="fs-5 fst-italic">
                    Mirror accessories
                  </Dropdown.Item>
                  <Dropdown.Item href="/taps" className="fs-5 fst-italic">
                    Taps
                  </Dropdown.Item>
                  <Dropdown.Item href="/sinktap" className="fs-5 fst-italic">
                    Sink Taps
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
                    Kitchen Accessories
                  </Dropdown.Item>
                  <Dropdown.Item href="/pipes" className="fs-5 fst-italic">
                    Pipes / Fittings
                  </Dropdown.Item>
                  <Dropdown.Item href="/lab" className="fs-5 fst-italic">
                    Lab Equipments
                  </Dropdown.Item>
                  <Dropdown.Item href="/cabinet" className="fs-5 fst-italic">
                    {/* Heat Extractor/Oven */}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;
