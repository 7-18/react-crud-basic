import { Container, Spinner } from "react-bootstrap"

export const SpinnerComponent = () => {
  return (
    <Container className="d-flex justify-content-center py-5 my-5">
       <Spinner animation="border" variant="secondary" />
    </Container>
  )
}