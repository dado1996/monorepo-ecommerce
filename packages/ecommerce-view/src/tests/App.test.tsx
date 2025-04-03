import { describe } from "vitest";
import App from "../App";
import { render, screen } from "@testing-library/react";

describe("The entirety of the app", () => {
  it("should load the app", () => {
    render(<App />);
    expect(screen.getByText("Login")).toBeInTheDocument();
  });
});
