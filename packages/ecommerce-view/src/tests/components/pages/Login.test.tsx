import { describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { Login } from "../../../pages/Login";
import "@testing-library/jest-dom/vitest";

describe("The not found page", () => {
  it("should display the not found text", () => {
    render(<Login />);
    expect(screen.getByText("Login")).toBeInTheDocument();
  });
});
