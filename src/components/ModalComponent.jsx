import { useEffect } from "react"
import { Button, Form, InputGroup, Modal } from "react-bootstrap"
import { useForm } from "../hooks/useForm"
import { AiOutlineEdit } from "react-icons/ai"
import { getProducts } from "../services/getProducts"
import axios from "axios"

export const ModalComponent = ({ show, handleClose, product, sP }) => {
  const [data, handleChange] = useForm({
    name: product?.name,
    price: product?.price,
    description: product?.description,
    id: product?.id,
    image: product?.image
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const url = `https://jsonapi-react-basic.herokuapp.com/products/${product?.id}`
    axios.patch(url, data).then(async () => {
      const data = await getProducts()
      sP(data)
      handleClose()
    })
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit product <AiOutlineEdit className="ms-1" /></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicNamel">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" onChange={handleChange} placeholder={product?.name} />
            </Form.Group>

            <InputGroup className="mb-3">
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control type="number" name="price" onChange={handleChange} placeholder={product?.price} />
            </InputGroup>

            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" name="description" label="Description" onChange={handleChange} placeholder={product?.description} />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleSubmit}>
            Save Changes
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}