import { describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { Forbidden } from "../../../pages/Forbidden";

describe("The not found page", () => {
  it("should display the not found text", () => {
    render(<Forbidden />);
    expect(screen.getByText("Forbidden")).toBeInTheDocument();
  });
});
