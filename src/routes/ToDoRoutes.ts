import { Request, Response, Router } from "express";
import { TaskController } from "../controllers/TaskController";

const taskController = new TaskController();
const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  return res.send("Hello World");
});

routes.post("/create/task", taskController.create)

export { routes };
