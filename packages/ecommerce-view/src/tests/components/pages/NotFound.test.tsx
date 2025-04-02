import { describe } from "vitest";
import { NotFound } from "../../../pages/NotFound";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

describe("The not found page", () => {
  it("should display the not found text", () => {
    render(<NotFound />);
    expect(screen.getByText("Not Found")).toBeInTheDocument();
  });
});
