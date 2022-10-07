import { Request } from "express";
import prisma from "../../database/PrismaService";
import { ValidatorTaskService } from "./ValidatorTask";

export class UpdateTaskService {

    public async exec(req: Request) {
        const { task, doneStatus } = req.body;

        const validateTask = new ValidatorTaskService();
        const validTask = await validateTask.exec(task);

        const updatedTask = await prisma.task.update({
            where: {
                id: validTask.id
            },
            data: {
                task: task,
                doneStatus: doneStatus
            }
        });

        return updatedTask;
    }
}