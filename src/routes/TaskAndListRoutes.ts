import { Router } from "express";
import { TaskAndListController } from "../controllers/TaskAndListController";
import { resolver } from "./errorHandler/Resolver";

const taskAndListRoutes = Router();
const taskAndListController = new TaskAndListController();

taskAndListRoutes.put("/add-task-in-list", resolver(taskAndListController.addTaskInList));
taskAndListRoutes.put("/remove-task-from-list", resolver(taskAndListController.removeTaskFromList));
taskAndListRoutes.put("/remove-all-task-from-list", resolver(taskAndListController.removeAllTaskFromList));

export { taskAndListRoutes };