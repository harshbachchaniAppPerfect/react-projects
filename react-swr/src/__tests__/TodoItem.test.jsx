import { fireEvent, render, screen } from "@testing-library/react";
import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  expect,
  test,
} from "vitest";
import TodoItem from "../components/TodoItem.jsx";
import { vi } from "vitest";
import { TodoProvider } from "../contexts/TodoContext.js";
import userEvent from "@testing-library/user-event";

// beforeAll(() => {
//   console.log("Before All executed");
// });

// afterAll(() => {
//   console.log("After All executed");
// });
// afterEach(() => {
//   console.log("After executed");
// });
// beforeEach(() => {
//   console.log("Before executed");
// });

const mockDeletefn = vi.fn();
const mockUpdatefn = vi.fn();

const mockContextValue = {
  todos: [],
  mutateaddTodo: () => {},
  mutateupdateTodo: mockUpdatefn,
  mutatedeleteTodo: mockDeletefn,
  mutatetoggleComplete: () => {},
};
test("testing todos functions", async () => {
  userEvent.setup();
  render(
    <TodoProvider value={mockContextValue}>
      <TodoItem
        todo={{
          id: 1,
          title: "Task 1",
          completed: false,
        }}
      />
    </TodoProvider>
  );
  const deleteButton = screen.getByTestId("deletebtn");
  const updateButton = screen.getByTestId("updatebtn");
  await userEvent.click(deleteButton);
  await userEvent.click(updateButton);
  expect(mockDeletefn).toHaveBeenCalled();
  expect(mockUpdatefn).toHaveBeenCalled();
});
