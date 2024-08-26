import TodoForm from "../components/TodoForm.jsx";
import { describe, expect, test, vitest } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

test("Props Testing", () => {
  const name = "Harsh";
  render(<TodoForm name={name} />);
  const user = screen.getByText(name);
  expect(user).toBeInTheDocument();
});

describe("Testing Add Input", () => {
  test("Testing Input With Attributes", () => {
    render(<TodoForm />);
    let checkInput = screen.getByRole("textbox", { name: "Add Todo" });

    let checkInputPlaceholder = screen.getByPlaceholderText("Write Todo...");
    expect(checkInput).toBeInTheDocument();
    expect(checkInput).toHaveAttribute("type", "text");
    expect(checkInput).toHaveAttribute("value", "");
    expect(checkInputPlaceholder).toBeInTheDocument();
  });
  test("Testing Input With Onchange", () => {
    render(<TodoForm />);
    let input = screen.getByRole("textbox", { name: "Add Todo" });

    fireEvent.change(input, { target: { value: "Learn Node.js" } });
    expect(input.value).toBe("Learn Node.js");
  });
  test("Testing Button Press", () => {
    render(<TodoForm />);
    let btn = screen.getByRole("button", { name: "Edit" });
    fireEvent.click(btn);
    expect(screen.getByText("Hello Harsh")).toBeInTheDocument();
  });
});
