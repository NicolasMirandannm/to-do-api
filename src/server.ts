import express from "express"; 
import { listRoutes } from "./routes/ListRoutes";
import { taskRoutes } from "./routes/TaskRoutes";

const app = express();
const port = 3000;

app.use(express.json());
app.use(taskRoutes, listRoutes);


app.listen(port, () => {
  console.log(`Server running on  http://localhost:${port}`);
});
