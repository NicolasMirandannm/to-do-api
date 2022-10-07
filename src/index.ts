import express, { json } from "express";
import { taskRoutes } from "./routes/TaskRoutes";

const app = express();
const port = 3000;

app.use(express.json());
app.use(taskRoutes);

app.listen(port, () => {
  console.log(`Server listening in http://localhost:${port}`);
});
