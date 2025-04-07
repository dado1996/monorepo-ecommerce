import { J } from "vitest/dist/chunks/reporters.d.CfRkRKN2.js";

const CART = "cart";
const BILLS = "bills";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  tax: number;
};

type Bill = {
  clientNo: string;
  clientInfo: {
    name: string;
    email: string;
    phone?: string;
    country: string;
  };
  billDetails: {
    id: string;
    date: string;
    products: {
      productName: string;
      productCategory: string;
      productPrice: number;
      amount: number;
      tax: number;
    }[];
    total: number;
  };
};

export function saveProductInCart(product: Product) {
  const data = localStorage.getItem(CART)!;
  let cart = JSON.parse(data) || [];
  cart.push(product);
  localStorage.setItem(CART, JSON.stringify(cart));
}

export function removeProductFromCart(id: number) {
  const data = localStorage.getItem(CART)!;
  const cart = JSON.parse(data) as [];
  const newCart = cart.map((item: Product) => {
    if (item.id !== id) return item;
  });
  localStorage.setItem(CART, JSON.stringify(newCart));
}

export function loadCart() {
  const data = localStorage.getItem(CART);
  if (!data) {
    return [];
  }
  return JSON.parse(data) as Product[];
}

export function loadBills() {
  const billsString = localStorage.getItem(BILLS)!;
  const bills = (JSON.parse(billsString) as Bill[]) || [];

  return bills;
}

export function saveBill(bill: Bill) {
  const billsString = localStorage.getItem(BILLS)!;
  const bills = JSON.parse(billsString) as Bill[];

  bills.push(bill);
  localStorage.setItem(BILLS, JSON.stringify(bills));
}
