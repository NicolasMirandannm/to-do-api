import { Request, Response } from "express";
import { RemoveTaskFromList } from "../services/task-in-list/RemoveTaskFromList";
import { AddTaskInList } from "../services/task-in-list/AddTaskInList";
import { RemoveAllTaskFromList } from "../services/task-in-list/RemoveAllTaskFromList";


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

    public async removeAllTaskFromList(req: Request, res: Response) {
        const removeAllTask = new RemoveAllTaskFromList();
        const listAfterRemove = await removeAllTask.exec(req);

        return res.json(listAfterRemove);
    }
}