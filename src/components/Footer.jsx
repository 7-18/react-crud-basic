import { Container, Navbar } from "react-bootstrap";

export const Footer = () => {
  return(
    <Navbar bg="dark" variant="dark" className="mt-5">
      <Container className="d-flex justify-content-center align-content-center">
        <p className="text-white logo">&copy; All rights reserved | <span className="fw-bold">LG Styles</span></p>
      </Container>
    </Navbar>
  )
};