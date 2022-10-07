import { Request, Response } from "express";
import prisma from "../../database/PrismaService";

export class CreateTaskService {

    public async exec(req: Request) {
        const { task , status } = req.body

        const taskCreated = await prisma.task.create({
            data: {
                task: task,
                doneStatus: status
            }
        })
        return taskCreated;
    }
}