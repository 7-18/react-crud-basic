import { useEffect, useState } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import { SpinnerComponent } from "../components/Spinner"
import { useProducts } from "../hooks/useProducts"
import { getProducts } from "../services/getProducts"
import { AiOutlineEdit } from "react-icons/ai"
import { BsTrash } from "react-icons/bs"
import axios from "axios"
import { ModalComponent } from "../components/ModalComponent"

export const DetailsProduct = ({ products, sP }) => {
  const [loading] = useProducts()
  const [data, setData] = useState(products)
  const [show, setShow] = useState(false);

  useEffect(() => {
    getProducts().then(res => setData(res))
  }, [products])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { id } = useParams()
  const navigate = useNavigate()

  const product = data.find(product => product.id == id)

  const deleteProduct = () => {
    const url = `https://jsonapi-react-basic.herokuapp.com/products/${id}`
    axios.delete(url).then(res => {
      navigate("/listProducts")
    })
  }
  return (
    <Container>
      {loading ? <SpinnerComponent /> : <>
        <Container className="pt-5 mt-5 vh-100">
          <Row>
            <Col className="col-lg-6">
              <img
                src={product?.image}
                alt={product?.name}
                className="img-fluid"
                loading="lazy"
              />
            </Col>
            <Col className="col-lg-4 py-5 ms-5 ps-5">
              <h2 className="fs-1 h1 fw-bold">{product?.name}</h2>
              <h3 className="mb-2">US$ {product?.price}</h3>
              <p>{product?.description}</p>
              <Button variant="outline-success me-3" onClick={handleShow}>Edit product <AiOutlineEdit className="ms-1" /></Button>
              <ModalComponent show={show} handleClose={handleClose} product={product} sP={sP} />
              <Button variant="outline-danger" onClick={deleteProduct}>Delete product <BsTrash className="ms-1" /></Button>
            </Col>
          </Row>

        </Container>
      </>}
    </Container >
  )
}