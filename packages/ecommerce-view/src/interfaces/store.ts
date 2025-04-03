import { CartItem, Product } from "./product";

export interface StoreState {
  user: "client" | "admin" | null;
  login: (username: "client" | "admin") => void;
  logout: () => void;
  cart: CartItem[];
  products: Product[];
  categories: string[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  changeAmount: (id: number, amount: number) => void;
  clearCart: () => void;
  getCartTotal: (state: StoreState) => number;
  getCartItemCount: (state: StoreState) => number;
}
