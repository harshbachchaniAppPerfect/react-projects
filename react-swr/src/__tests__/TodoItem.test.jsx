import { render, screen } from "@testing-library/react";
import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  expect,
  test,
  vitest,
} from "vitest";
import TodoItem from "../components/TodoItem.jsx";
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
