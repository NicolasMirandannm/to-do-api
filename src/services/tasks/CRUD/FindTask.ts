import { Request } from "express";
import prisma from "../../../database/PrismaService";
import { ValidatorTaskService } from "../ValidatorTask";

export class FindOneTask {

    public async exec(req: Request) {
        const { task } = req.body;

        const validateTask = new ValidatorTaskService();
        const uniqueTask = await validateTask.exec(task);
        
        return uniqueTask;
    }

}