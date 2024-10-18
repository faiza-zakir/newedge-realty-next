"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Container,
  Offcanvas,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import logo from "../../../assets/logo/logo.svg";
import blacklogo from "../../../assets/logo/blacklogo.svg";
import { FaAngleRight } from "react-icons/fa";
// css
import "./style.scss";

const MainNavbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeToggler = () => {
    document.getElementById("responsive-navbar-nav").className =
      "navbar-collapse collapse";
  };

  return (
    <>
      {/* <div className="top_bar_sec">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quo
          animi
        </p>
      </div> */}
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`navbar-area ${scrolled ? "sticky-top" : "fixed-top"}`}
      >
        <Container>
          <Navbar.Brand as={Link} href="/" className="d-lg-none">
            <Image src={logo} alt="logo" width="180px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                <Image src={blacklogo} alt="logo" width="180px" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav>
                <NavDropdown
                  title="Projects"
                  id="about-dropdown"
                  className="about_dropdown"
                >
                  <NavDropdown.Item
                    as={Link}
                    onClick={() => closeToggler()}
                    href="/residential"
                    className={`nav-drop-link ${
                      pathname === "/residential" && "active"
                    }`}
                  >
                    Residential <FaAngleRight className="angle-arrow" />
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    onClick={() => closeToggler()}
                    href="/commercial"
                    className={`nav-drop-link ${
                      pathname === "/commercial" && "active"
                    }`}
                  >
                    Commercial <FaAngleRight className="angle-arrow" />
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    onClick={() => closeToggler()}
                    href="/pre-leased"
                    className={`nav-drop-link ${
                      pathname === "/pre-leased" && "active"
                    }`}
                  >
                    Pre-Leased <FaAngleRight className="angle-arrow" />
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    onClick={() => closeToggler()}
                    href="/industrial"
                    className={`nav-drop-link ${
                      pathname === "/industrial" && "active"
                    }`}
                  >
                    Industrial <FaAngleRight className="angle-arrow" />
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    onClick={() => closeToggler()}
                    href="/farmhouse"
                    className={`nav-drop-link ${
                      pathname === "/farmhouse" && "active"
                    }`}
                  >
                    Farmhouse <FaAngleRight className="angle-arrow" />
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    onClick={() => closeToggler()}
                    href="/land"
                    className={`nav-drop-link ${
                      pathname === "/land" && "active"
                    }`}
                  >
                    Land <FaAngleRight className="angle-arrow" />
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link
                  onClick={() => closeToggler()}
                  as={Link}
                  href="/developers"
                  className={`nav-item ${
                    pathname === "/developers" && "active"
                  }`}
                >
                  Developers
                </Nav.Link>
                <Nav.Link
                  onClick={() => closeToggler()}
                  as={Link}
                  href="/locations"
                  className={`nav-item ${
                    pathname === "/locations" && "active"
                  }`}
                >
                  Locations
                </Nav.Link>
                {/* <NavDropdown
              title="Locations"
              id="location-dropdown"
              className="location_dropdown"
            >
              <NavDropdown.Item
                as={Link}
                onClick={() => closeToggler()}
                href="/location/zone-1"
                className={`nav-drop-link ${
                  pathname === "/location/zone-1" && "active"
                }`}
              >
                Zone 1 <FaAngleRight className="angle-arrow" />
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                onClick={() => closeToggler()}
                href="/location/zone-2"
                className={`nav-drop-link ${
                  pathname === "/location/zone-2" && "active"
                }`}
              >
                Zone 2 <FaAngleRight className="angle-arrow" />
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                onClick={() => closeToggler()}
                href="/location/zone-3"
                className={`nav-drop-link ${
                  pathname === "/location/zone-3" && "active"
                }`}
              >
                Zone 3 <FaAngleRight className="angle-arrow" />
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                onClick={() => closeToggler()}
                href="/location/zone-4"
                className={`nav-drop-link ${
                  pathname === "/location/zone-4" && "active"
                }`}
              >
                Zone 4 <FaAngleRight className="angle-arrow" />
              </NavDropdown.Item>
            </NavDropdown> */}
              </Nav>
              <Navbar.Brand
                as={Link}
                href="/"
                className="mx-auto d-none d-lg-block"
              >
                <Image src={logo} alt="logo" width="180px" />
              </Navbar.Brand>
              <Nav>
                <Nav.Link
                  onClick={() => closeToggler()}
                  as={Link}
                  href="/about"
                  className={`nav-item ${pathname === "/about" && "active"}`}
                >
                  About Us
                </Nav.Link>
                <Nav.Link
                  onClick={() => closeToggler()}
                  as={Link}
                  href="/contact"
                  className={`nav-item ${pathname === "/contact" && "active"}`}
                >
                  Contact Us
                </Nav.Link>
                <Nav.Link
                  onClick={() => closeToggler()}
                  as={Link}
                  href="/blogs"
                  className={`nav-item ${pathname === "/blogs" && "active"}`}
                >
                  Blogs
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default MainNavbar;
