import { Request, Response, Router } from "express";
import { TaskController } from "../controllers/TaskController";
import { resolver } from "./errorHandler/Resolver";

const taskController = new TaskController();
const taskRoutes = Router();

taskRoutes.get("/", (req: Request, res: Response) => {
  return res.send("Hello World");
});

taskRoutes.post("/task/create", resolver(taskController.create))

taskRoutes.put("/task/update", resolver(taskController.update))

taskRoutes.delete("/task/delete", resolver(taskController.delete))

taskRoutes.get("/task/findOne", resolver(taskController.find))

taskRoutes.get("/task/findAll", resolver(taskController.findAll))

export { taskRoutes };
