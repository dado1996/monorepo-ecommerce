import ListGroup from "react-bootstrap/ListGroup";
import useStore from "../hooks/store";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { priceFormat } from "common/priceFormat";

export function Cart() {
  const cartItems = useStore((state) => state.cart);
  const total = useStore((state) => state.getCartTotal(state));

  return (
    <>
      <h1>Cart</h1>
      <Container>
        <Row>
          <Col>
            <ListGroup>
              {cartItems.length > 0 ? (
                <>
                  {cartItems.map((item) => {
                    const price = (item.price + item.price * item.tax) * item.quantity;
                    return (
                      <ListGroup.Item key={item.id}>
                        <p>{item.name}</p>
                        <p>Amount: {item.quantity}</p>
                        <span>Price: ${priceFormat(price)}</span>
                      </ListGroup.Item>
                    );
                  })}
                  <ListGroup.Item>
                    <b>Total: ${priceFormat(total)}</b>
                  </ListGroup.Item>
                </>
              ) : (
                <p>No items in the cart</p>
              )}
            </ListGroup>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}
