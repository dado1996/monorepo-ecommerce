export interface Product {
  id: number;
  name: string;
  category: string;
  stock: number;
  price: number;
  tax: number;
}

export interface CartItem extends Product {
  quantity: number;
}
