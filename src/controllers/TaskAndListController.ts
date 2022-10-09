import { Request, Response } from "express";
import { AddTaskInList } from "../services/task-in-list/addTaskInList";
import { RemoveTaskFromList } from "../services/task-in-list/RemoveTaskFromList";


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