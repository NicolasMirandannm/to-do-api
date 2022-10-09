import { Request } from "express";
import prisma from "../../../database/PrismaService";
import { ValidatorTask } from "../ValidatorTask";

export class FindOneTask {

    public async exec(req: Request) {
        const { task } = req.body;

        const validateTask = new ValidatorTask();
        const uniqueTask = await validateTask.exec(task);
        
        return uniqueTask;
    }

}