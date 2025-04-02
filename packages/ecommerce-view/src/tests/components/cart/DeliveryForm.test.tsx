import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import DeliveryForm from "../../../components/cart/DeliveryForm";
import "@testing-library/jest-dom/vitest";

describe("The delivery form", () => {
  it("should render the delivery form", () => {
    render(<DeliveryForm />);
    expect(screen.getByText("Full Name")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Phone")).toBeInTheDocument();
    expect(screen.getByText("Country")).toBeInTheDocument();
  });
});
