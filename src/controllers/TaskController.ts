import { Request, Response } from "express";
import { CreateTaskService } from "../services/tasks/CreateTaskService";
import { DeleteTaskService } from "../services/tasks/DeleteTaskService";
import { FindTaskService } from "../services/tasks/FindTaskService";
import { ListAllTasksService } from "../services/tasks/ListAllTasksService";
import { UpdateTaskService } from "../services/tasks/UpdateTaskService";

export class TaskController {

    public async create(req: Request, res: Response) {
        const task = new CreateTaskService();

        const taskRes = await task.exec(req);

        return res.json(taskRes);
    }

    public async update(req: Request, res: Response) {
        const taskUpdate = new UpdateTaskService();

        const updateRes = await taskUpdate.exec(req);

        return res.json(updateRes);
    }

    public async findAll(req: Request, res: Response) {
        const listAllTasks = new ListAllTasksService()

        const findAllRes = await listAllTasks.exec();
        
        return res.json(findAllRes);
    }

    public async find(req: Request, res: Response) {
        const findOne = new FindTaskService();

        const findRes = await findOne.exec(req);

        return res.json(findRes);
    }

    public async delete(req: Request, res: Response) {
        const deleteTask = new DeleteTaskService();

        const deleteRes = await deleteTask.exec(req);

        return res.json(deleteRes);
    }
}