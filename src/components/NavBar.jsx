import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FaShopify } from "react-icons/fa"
import { MdOutlineAddBusiness } from "react-icons/md"

export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand className="fs-1 logo">LG Styles</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Item>
              <Link className="text-white text-decoration-none" to="/">Register products <MdOutlineAddBusiness className="ms-2" /></Link>
            </Nav.Item>
            <Nav.Item className="ms-4">
              <Link className="text-white text-decoration-none" to="/listProducts">List of products <FaShopify className="ms-2" /></Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}