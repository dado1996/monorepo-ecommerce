import Container from "react-bootstrap/Container";
import useStore from "../hooks/store";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { priceFormat } from "common/priceFormat";

export function Catalog() {
  const products = useStore((state) => state.products);
  const addToCart = useStore((state) => state.addToCart);
  return (
    <>
      <h1>Catalog</h1>
      <Container>
        <Row>
          {products.map((p) => {
            return (
              <Col key={p.id} style={{ border: "1px solid #ccc" }} xs={12} md={4} xl={3}>
                <p>{p.name}</p>
                <span className="me-3">
                  ${priceFormat(p.price)} - {p.stock} units
                </span>
                <Button type="button" onClick={() => addToCart(p)}>
                  +
                </Button>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
