import { useEffect, useState } from "react"
import { Button, Container, Form, FormControl, Row } from "react-bootstrap"
import { FaShopify } from "react-icons/fa"
import { Products } from "../components/Products"
import { SpinnerComponent } from "../components/Spinner"
import { useProducts } from "../hooks/useProducts"
import { getProducts } from "../services/getProducts"

export const ListProducts = () => {
  const [keyword, setKeyword] = useState("")
  const [loading, products] = useProducts()
  const [data, setData] = useState(products)

  useEffect(() => {
    getProducts().then(res => setData(res))
  }, [])

  const handleChange = e => {
    setKeyword(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const productFilter = data.filter(product =>
      product.name.toLowerCase().includes(keyword.toLowerCase())
    )
    setData(productFilter)
    if (keyword === "") {
      setData(products)
    }
  }

  return (
    <Container className="px-5 p-2 justify-content-center">
      <h2 className="text-center display-5 py-3">List of products <FaShopify className="ms-2" /></h2>
      <Form className="d-flex justify-content-center" onSubmit={handleSubmit}>
        <FormControl
          type="text"
          placeholder="Search"
          className="me-2 w-25"
          aria-label="Search"
          value={keyword}
          onChange={handleChange}
        />
        <Button variant="outline-dark" type='submit'>Search</Button>
      </Form>
      <Row xs={1} md={2} className="g-4">
        {loading ? <SpinnerComponent /> : <> <Products products={data} /> </>}
      </Row>
    </Container>
  )
}