import { Button, Container, Form, FormControl, InputGroup } from "react-bootstrap"
import { BsShop } from "react-icons/bs"
import { useForm } from "../hooks/useForm";
import { uploadFile } from "../helpers/uploadFile";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const RegisterProduct = () => {
  const [data, handleChange, uploadImg] = useForm({
    name: "",
    description: "",
    price: "",
    image: ""
  });

  const navigate = useNavigate();
  const url = "https://jsonapi-react-basic.herokuapp.com/products"

  const handleImg = e => {
    const file = e.target.files[0];
    uploadFile(file).then(res => uploadImg(res));
  };

  const handleClick = e => {
    e.preventDefault();
    if (data.name || data.description || data.price || data.image !== "") {
      axios.post(url, data).then(res => {
        console.log(res);
        navigate("/listProducts");
      });
    };
  }

  return (
    <Container className="p-5 justify-content-center vh-100">
      <h2 className="text-center display-5 p-5">Register a product <BsShop className="ms-2" /></h2>
      <Form className="p-5 border">
        <Form.Group className="mb-3" controlId="formBasicNamel">
          <Form.Control type="text" name="name" placeholder="Enter a product name..." onChange={handleChange} />
        </Form.Group>

        <InputGroup className="mb-3">
          <InputGroup.Text>$</InputGroup.Text>
          <FormControl type="number" name="price" placeholder="Price..." onChange={handleChange} />
        </InputGroup>

        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Control type="text" name="description" label="Description" placeholder="Description..." onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formFileSm" className="mb-5">
          <Form.Control type="file" name="image" size="sm" onChange={handleImg} />
        </Form.Group>
        <Button variant="outline-dark" type="submit" onClick={handleClick}>
          Register product
        </Button>
      </Form>
    </Container>
  )
}