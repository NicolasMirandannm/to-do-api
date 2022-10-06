import { Request, Response } from "express";
import { CreateTaskService } from "../services/tasks/CreateTaskService";

export class TaskController {

    public async create(req: Request, res: Response) {
        const task = new CreateTaskService();

        const taskRes = await task.exec(req, res);

        return res.json(taskRes);
    }
}