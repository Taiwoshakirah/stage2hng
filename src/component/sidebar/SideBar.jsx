import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { GrMenu } from "react-icons/gr";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <GrMenu onClick={handleShow} className="d-lg-none cursor" size="30px" style={{ color: 'white' }} />
      <Offcanvas show={show} onHide={handleClose} placement="start" className="half-width">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="text-black">
          <ul className="nav-links">
            <li>
              <Link className="text-decoration-none text-black mb-2" to="/">Home</Link>
            </li>
            <li>
              <Link className="text-decoration-none text-black mb-2" to="/categories">Categories</Link>
            </li>
            <li>
              <Link className="text-decoration-none text-black mb-2" to="/about">About</Link>
            </li>
            <li>
              <Link className="text-decoration-none text-black mb-2" to="/contact">Contact</Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;
