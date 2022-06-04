import { useEffect, useState } from "react"
import { Button, Container, Form, FormControl, Row } from "react-bootstrap"
import { FaShopify } from "react-icons/fa"
import { Products } from "../components/Products"
import { SpinnerComponent } from "../components/Spinner"
import { useProducts } from "../hooks/useProducts"
import { getProducts } from "../services/getProducts"

export const ListProducts = () => {
  const [loading, products] = useProducts()
  const [data, setData] = useState(products)

  useEffect(() => {
    getProducts().then(res => setData(res))
  }, [])

  return (
    <Container className="px-5 p-2 justify-content-center">
      <h2 className="text-center display-5 py-3">List of products <FaShopify className="ms-2" /></h2>
      <Form className="d-flex justify-content-center">
        <FormControl
          type="text"
          placeholder="Search"
          className="me-2 w-25"
          aria-label="Search"
        />
        <Button variant="outline-dark" type='submit'>Search</Button>
      </Form>
      <Row xs={1} md={2} className="g-4">
        {loading ? <SpinnerComponent /> : <> <Products products={data} /> </>}
      </Row>
    </Container>
  )
}