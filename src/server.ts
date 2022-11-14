import express from "express"; 
import { listRoutes } from "./routes/ListRoutes";
import { taskAndListRoutes } from "./routes/TaskAndListRoutes";
import { taskRoutes } from "./routes/TaskRoutes";
import cors from 'cors';

const app = express();
const port = 3000;
const options: cors.CorsOptions = {
  origin: '*'
}

app.use(cors(options));
app.use(express.json());
app.use(taskRoutes, listRoutes, taskAndListRoutes);


app.listen(port, () => {
  console.log(`Server running on  http://localhost:${port}`);
});
