import { create } from "zustand";
import products from "../assets/mockProducts.json";
import { Product } from "../interfaces/product";
import { StoreState } from "../interfaces/store";

const useStore = create<StoreState>((set) => ({
  cart: [],
  products: products,
  addToCart: (product: Product) => {
    set((state) => {
      const exists = state.cart.find((item) => item.id === product.id);
      const productReturn = state.products.map((item) => {
        if (item.id !== product.id) return item;
        return {
          ...item,
          stock: item.stock - 1,
        };
      });
      if (exists) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
          products: productReturn,
        };
      } else {
        return {
          cart: [...state.cart, { ...product, quantity: 1 }],
          products: productReturn,
        };
      }
    });
  },
  removeFromCart: (id) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id === id),
      products: state.products.map((item) => {
        if (item.id !== id) return item;
        return {
          ...item,
          stock: item.stock + 1,
        };
      }),
    }));
  },
  changeAmount: (id, amount) => {
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, amount) } : item
      ),
    }));
  },
  clearCart: () => {
    set({ cart: [] });
  },
  getCartTotal: (state: StoreState) => {
    return state.cart.reduce(
      (total, item) => total + (item.price + item.price * item.tax) * item.quantity,
      0
    );
  },
  getCartItemCount: (state: StoreState) => {
    return state.cart.reduce((count, item) => count + item.quantity, 0);
  },
  role: null,
  setRole: (role: "client" | "admin") => {
    set({
      role,
    });
  },
}));

export default useStore;
