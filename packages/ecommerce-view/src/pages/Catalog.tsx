import Container from "react-bootstrap/Container";
import useStore from "../hooks/store";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
                <p>
                  <span>{p.name}</span>
                  <span>
                    ${p.price} - {p.stock} units
                  </span>
                  <button type="button" onClick={() => addToCart(p)}>
                    Add to cart
                  </button>
                </p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
