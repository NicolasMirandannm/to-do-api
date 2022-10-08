import { Request, Response } from "express";
import prisma from "../../../database/PrismaService";

export class CreateTask {

    public async exec(req: Request) {
        const { task , doneStatus } = req.body

        const taskCreated = await prisma.task.create({
            data: {
                task: task,
                doneStatus: doneStatus
            }
        })
        return taskCreated;
    }
}