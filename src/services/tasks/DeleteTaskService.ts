import { Request } from "express";
import prisma from "../../database/PrismaService";
import { ValidatorTaskService } from "./ValidatorTask";

export class DeleteTaskService {

    public async exec(req: Request) {
        const { task } = req.body;

        const validateTask = new ValidatorTaskService();
        const validTask = await validateTask.exec(task);

        return await prisma.task.delete({
            where: {
                id: validTask.id
            }
        })
    }
}