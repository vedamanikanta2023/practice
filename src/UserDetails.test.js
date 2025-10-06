import React from "react";
import { render, screen } from "@testing-library/react";
import { UserDetails } from "./UserDetails";

describe("UserDetails Component", () => {
  test("renders heading correctly", () => {
    render(<UserDetails />);
    const heading = screen.getByText(/User Details/i);
    expect(heading).toBeInTheDocument();
  });

  test("renders user name", () => {
    render(<UserDetails />);
    const name = screen.getByText(/vedamanikanta vanga/i);
    expect(name).toBeInTheDocument();
  });

  test("renders job title", () => {
    render(<UserDetails />);
    const role = screen.getByText(/Frontend Developer/i);
    expect(role).toBeInTheDocument();
  });

  test("renders phone number", () => {
    render(<UserDetails />);
    const phone = screen.getByText(/8790785047/);
    expect(phone).toBeInTheDocument();
  });
});