import { Request, Response } from "express";
import { RemoveTaskFromList } from "../services/task-in-list/RemoveTaskFromList";
import { AddTaskInList } from "../services/task-in-list/AddTaskInList";


export class TaskAndListController {

    public async addTaskInList(req: Request, res: Response) {
        const addTask = new AddTaskInList();
        const addedTask = await addTask.exec(req);

        return res.json(addedTask);
    }

    public async removeTaskFromList(req: Request, res: Response) {
        const removeTask = new RemoveTaskFromList();
        const removedTask = await removeTask.exec(req);

        return res.json(removedTask);
    }
}