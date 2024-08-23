import express, { urlencoded } from "express";
import cors from "cors";
import { errHandler } from "./utils/errhandler.js";
const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

import todoRouter from "./routes/todo.routes.js";

app.use("/api/todo", todoRouter);

app.use(errHandler);
export { app };
