import { Button, Card, Col } from "react-bootstrap"

export const Products = ({products}) => {
  return (
    <>
      {products.map(product => (
        <Col key={product.id} className="g-4 px-5 pt-5 text-center">
          <Card className="mx-4 border-0 shadow">
            <Card.Img variant="top" src={product.image} className="img-fluid" style={{height: "250px"}}/>
            <Card.Body>
              <Card.Text className="fs-5 text-truncate">{product.name}</Card.Text>
              <Card.Text>US ${product.price}</Card.Text>
              <Button href={`/details/${product.id}/${product.name}`} variant="outline-dark">More details</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  )
}