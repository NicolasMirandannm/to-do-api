import express, { json } from "express";
import { routes } from "./routes/ToDoRoutes";

const app = express();
const port = 3000;

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server listening in http://localhost:${port}`);
});
