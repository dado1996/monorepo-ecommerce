import useStore from "../hooks/store";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router";
import CartList from "../components/cart/CartList";

export function Cart() {
  const total = useStore((state) => state.getCartTotal(state));
  const clearCart = useStore((state) => state.clearCart);
  const cartEmpty = total === 0;
  return (
    <>
      <h1>Cart</h1>
      <Container>
        <Row>
          <Col>
            <CartList total={total} />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Link hidden={cartEmpty} to="/bill" className="btn btn-primary">
              Generate bill
            </Link>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col hidden={cartEmpty}>
            <a href="#" onClick={clearCart}>
              Clear Cart
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}
