import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import DeliveryForm from "../components/cart/DeliveryForm";

export function Billing() {
  return (
    <>
      <h1>Billing</h1>
      <Container>
        <Row>
          <Col>
            <h3>Delivery Form</h3>
            <DeliveryForm />
          </Col>
        </Row>
      </Container>
    </>
  );
}
