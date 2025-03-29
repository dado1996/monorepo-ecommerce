const CART = "cart";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  tax: number;
};

export function saveProduct(product: Product) {
  const data = localStorage.getItem(CART);
  let cart = [];
  if (data) {
    cart = JSON.parse(data) || [];
  }
  cart.push(product);
  localStorage.setItem(CART, JSON.stringify(cart));
}

export function removeProduct(id: number) {
  const data = localStorage.getItem(CART)!;
  const cart = JSON.parse(data) as [];
  const newCart = cart.map((item: Product) => {
    if (item.id !== id) return item;
  });
  localStorage.setItem(CART, JSON.stringify(newCart));
}

export function load() {
  const data = localStorage.getItem(CART);
  if (!data) {
    return [];
  }
  return JSON.parse(data);
}
