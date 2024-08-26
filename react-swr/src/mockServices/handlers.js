import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("http://localhost:8000/api/todo", () => {
    return HttpResponse.json([
      {
        id: 1,
        title: "Task 1",
        completed: false,
      },
      {
        id: 2,
        title: "Task 2",
        completed: true,
      },
      {
        id: 3,
        title: "Task 3",
        completed: false,
      },
      {
        id: 4,
        title: "Task 4",
        completed: true,
      },
    ]);
  }),
];
