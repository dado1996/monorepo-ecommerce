import { CartItem, Product } from "./product";

export interface StoreState {
  role: "client" | "admin" | null;
  setRole: (role: "client" | "admin") => void;
  cart: CartItem[];
  products: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  changeAmount: (id: number, amount: number) => void;
  clearCart: () => void;
  getCartTotal: (state: StoreState) => number;
  getCartItemCount: (state: StoreState) => number;
}
