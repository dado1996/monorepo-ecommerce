import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CartList from "../../../components/cart/CartList";
import "@testing-library/jest-dom/vitest";

describe("Cart List", () => {
  it("should render the cart list", () => {
    render(<CartList total={10000} />);
    expect(screen.getByText("$10.000")).toBeInTheDocument();
  });

  it("should render the cart list empty", () => {
    render(<CartList total={10000} />);
    expect(screen.getByText("No items in the cart")).toBeInTheDocument();
  });
});
