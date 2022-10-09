import { Request } from "express";
import prisma from "../../../database/PrismaService";

export class UpdateTask {

    public async exec(req: Request) {
        const { id, task, doneStatus } = req.body;

        const validateTask = await prisma.task.findFirst({
            where: {
                id: id
            }
        })

        if (!validateTask) {
            throw new Error("the task does not exists!");
        }

        const updatedTask = await prisma.task.update({
            where: {
                id: validateTask.id
            },
            data: {
                task: task,
                doneStatus: doneStatus,
            }
        });

        return updatedTask;
    }
}