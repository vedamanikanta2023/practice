import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { UserDetails } from "./UserDetails";

describe("UserDetails Component", () => {
  it("counter displays correct initial count", () => {
    const { getByTestId } = render(<UserDetails />);
    const countValue = getByTestId("count").textContent;
    expect(countValue).toEqual("User Details");
  });
  test("renders heading correctly", () => {
    render(<UserDetails />);
    const heading = screen.getByText(/User Details/i);
    expect(heading).toBeInTheDocument();
  });

  test("renders user name", () => {
    const {getByTestId}=render(<UserDetails />);
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