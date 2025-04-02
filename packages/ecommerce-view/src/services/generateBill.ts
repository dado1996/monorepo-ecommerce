import { Delivery } from "../interfaces/delivery";
import { CartItem } from "../interfaces/product";

export function generateBill(clientInfo: Delivery, products: CartItem[]) {
  const bills = localStorage.getItem("bills");
  let billsData = [];
  if (bills) {
    billsData = JSON.parse(bills);
  }

  const newBill = {
    clientNo: "1",
    clientInfo,
    billDetails: {
      id: "1234",
      date: new Date(),
      products,
      total: 0,
    },
  };

  billsData.push(newBill);
  localStorage.setItem("bills", JSON.stringify(billsData));
}
