import { Request, Response } from "express";
import { CreateTask } from "../services/tasks/CRUD/CreateTask";
import { DeleteTask } from "../services/tasks/CRUD/DeleteTask";
import { FindOneTask } from "../services/tasks/CRUD/FindTask";
import { ListAllTasks } from "../services/tasks/CRUD/ListAllTasks";
import { UpdateTask } from "../services/tasks/CRUD/UpdateTask";

export class TaskController {

    public async create(req: Request, res: Response) {
        const task = new CreateTask();

        const taskRes = await task.exec(req);

        return res.json(taskRes);
    }

    public async update(req: Request, res: Response) {
        const taskUpdate = new UpdateTask();

        const updateRes = await taskUpdate.exec(req);

        return res.json(updateRes);
    }

    public async findAll(req: Request, res: Response) {
        const listAllTasks = new ListAllTasks()

        const findAllRes = await listAllTasks.exec();
        
        return res.json(findAllRes);
    }

    public async find(req: Request, res: Response) {
        const findOne = new FindOneTask();

        const findRes = await findOne.exec(req);

        return res.json(findRes);
    }

    public async delete(req: Request, res: Response) {
        const deleteTask = new DeleteTask();

        const deleteRes = await deleteTask.exec(req);

        return res.json(deleteRes);
    }
}