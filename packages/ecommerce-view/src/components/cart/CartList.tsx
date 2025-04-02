import ListGroup from "react-bootstrap/ListGroup";
import useStore from "../../hooks/store";
import { priceFormat } from "common/priceFormat";

export default function CartList({ total }: { total: number }) {
  const cartItems = useStore((state) => state.cart);

  return (
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
  );
}
