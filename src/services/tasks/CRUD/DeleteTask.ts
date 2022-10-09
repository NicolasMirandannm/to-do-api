import { Request } from "express";
import prisma from "../../../database/PrismaService";
import { ValidatorTask } from "../ValidatorTask";

export class DeleteTask {

    public async exec(req: Request) {
        const { task } = req.body;

        const validateTask = new ValidatorTask();
        const validTask = await validateTask.exec(task);

        return await prisma.task.delete({
            where: {
                id: validTask.id
            }
        })
    }
}