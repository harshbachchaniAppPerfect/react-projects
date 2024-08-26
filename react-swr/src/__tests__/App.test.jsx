import { render, screen } from "@testing-library/react";
import { expect, test, vitest, describe } from "vitest";
import App from "../App.jsx";

test.skip.each([
  [1, 1, 2],
  [1, 2, 3],
  [2, 1, 3],
])("add(%i, %i) -> %i", (a, b, expected) => {
  expect(a + b).toBe(expected);
});

const person = {
  isActive: true,
  age: 32,
};

describe.skip("person", () => {
  test("person is defined", () => {
    expect(person).toBeDefined();
  });

  test("is active", () => {
    expect(person.isActive).toBeTruthy();
  });

  test("age limit", () => {
    expect(person.age).toBeLessThanOrEqual(32);
  });
});

test("Testing Snapshot", () => {
  const container = render(<App />);
  expect(container).toMatchSnapshot();
});

test("Test Heading", () => {
  render(<App />);
  // const text = screen.getAllByText("Manage Your Todos");
  const text = screen.getByText(/Manage YouR Todos/i); //skip case insensitive
  expect(text).toBeInTheDocument();
});
