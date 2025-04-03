import { describe, it, expect } from "vitest";
import { saveProduct, removeProduct, load } from "../localStorage";

describe("saving to localStorage", () => {
  it("should save to localStorage", () => {
    const product = {
      id: 1,
      name: "Toronja",
      category: "Citricos",
      price: 4000,
      tax: 0.19,
      stock: 1000,
    };
    saveProduct(product);
    expect(localStorage.getItem("cart")).toBeTruthy();
    expect(localStorage.getItem("cart")).not.toBeNull();
  });

  it("should load from localStorage", () => {
    const product = {
      id: 1,
      name: "Toronja",
      category: "Citricos",
      price: 4000,
      tax: 0.19,
      stock: 1000,
    };
    saveProduct(product);
    expect(localStorage.getItem("cart")).toBeTruthy();
    expect(localStorage.getItem("cart")).not.toBeNull();
  });

  it("should remove a product from localStorage", () => {
    const product = {
      id: 1,
      name: "Toronja",
      category: "Citricos",
      price: 4000,
      tax: 0.19,
      stock: 1000,
    };
    saveProduct(product);
    expect(localStorage.getItem("cart")).toBeTruthy();
    expect(localStorage.getItem("cart")).not.toBeNull();
  });
});
