import { describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { Admin } from "../../../pages/Admin";
import "@testing-library/jest-dom/vitest";

describe("The not found page", () => {
  it("should display the admin text", () => {
    render(<Admin />);
    expect(screen.getByText("Admin")).toBeInTheDocument();
  });
});
