import { describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { Billing } from "../../../pages/Billing";
import "@testing-library/jest-dom/vitest";

describe("The not found page", () => {
  it("should display the not found text", () => {
    render(<Billing />);
    expect(screen.getByText("Billing")).toBeInTheDocument();
  });
});
