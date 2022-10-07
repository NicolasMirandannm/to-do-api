import { Request, Response, Router } from "express";
import { TaskController } from "../controllers/TaskController";

const taskController = new TaskController();
const taskRoutes = Router();

taskRoutes.get("/", (req: Request, res: Response) => {
  return res.send("Hello World");
});

taskRoutes.post("/task/create", taskController.create)

taskRoutes.put("/task/update", taskController.update)

taskRoutes.delete("/task/delete", taskController.delete)

taskRoutes.get("/task/findOne", taskController.find)

taskRoutes.get("/task/findAll", taskController.findAll)

export { taskRoutes };
