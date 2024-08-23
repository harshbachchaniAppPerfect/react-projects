import { connectDB } from "./db/config.js";
import { app } from "./app.js";
import { createTodoTable } from "./queries/todo.query.js";

connectDB()
  .then(async () => {
    await createTodoTable();
    app.listen(8000, () => {
      console.log("Server is running : http://localhost:8000");
    });
  })
  .catch((err) => {
    console.log("PostgreSQL connection Failed !!!", err);
  });
