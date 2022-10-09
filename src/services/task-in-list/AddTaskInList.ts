import { Task } from "@prisma/client";
import { Request, Response } from "express";
import prisma from "../../database/PrismaService";
import { ValidateList } from "../lists/validateList";
import { ValidatorTask } from "../tasks/ValidatorTask";

export class AddTaskInList {

    public async exec(req: Request): Promise<Task> {
        const validateTask = new ValidatorTask();
        const validateList = new ValidateList();

        const { task, list } = req.body;

        const validTask = await validateTask.exec(task.name);
        const validList = await validateList.exec(list.name);

        const taskAddInList = await prisma.task.update({
            where: {
                id: validTask.id
            },
            data: {
                listId: validList.id
            }
        })

        return taskAddInList;
    }
}