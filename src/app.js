import express from "express";
import allTodos from "./router/todo.js"

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "Hello World!" });
});

app.use(allTodos)

app.listen(3301, () => {
  console.log("listening on 3301");
});
