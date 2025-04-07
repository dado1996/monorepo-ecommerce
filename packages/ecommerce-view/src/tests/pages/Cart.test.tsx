import { describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { Cart } from "../../pages/Cart";
import "@testing-library/jest-dom/vitest";

describe("The not found page", () => {
  it("should display the not found text", () => {
    render(<Cart />);
    expect(screen.getByText("Cart")).toBeInTheDocument();
  });
});
