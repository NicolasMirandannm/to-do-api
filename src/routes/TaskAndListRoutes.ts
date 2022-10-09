import { Router } from "express";
import { TaskAndListController } from "../controllers/TaskAndListController";
import { resolver } from "./errorHandler/Resolver";

const taskAndListRoutes = Router();
const taskAndListController = new TaskAndListController();

taskAndListRoutes.post("/add-task-in-list", resolver(taskAndListController.addTaskInList));
taskAndListRoutes.put("/remove-task-from-list", resolver(taskAndListController.removeTaskFromList));

export { taskAndListRoutes };