import { List, Task } from "@prisma/client";
import { Request } from "express";
import prisma from "../../database/PrismaService";

export class RemoveTaskFromList {

    public async exec(req: Request): Promise<Task> {
        const { task, list } = req.body;
        
        const remove = await prisma.task.update({
            where: {
                id: task.id
            },
            data: {
                listId: null
            }
        })

        return remove;

    }
}