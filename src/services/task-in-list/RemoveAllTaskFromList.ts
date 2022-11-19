import { List } from "@prisma/client";
import { Request } from "express";
import prisma from "../../database/PrismaService";

export class RemoveAllTaskFromList {

    public async exec(req: Request): Promise<List> {
        
        const { list } = req.body;

        const listExistent = await prisma.list.findFirst({
            where: {
                name: list
            }
        })

        if(!listExistent) {
            throw new Error('Lista não existe!');
        }

        await prisma.task.updateMany({
            where: {
                listId: listExistent.id
            },
            data: {
                listId: null
            }
        })

        const listUpdated = await prisma.list.findFirst({
            where: {
                id: listExistent.id
            },
            select: {
                id: true,
                name: true,
                created_at: true,
                tasks: true
            }
        })

        if (!listUpdated) {
            throw new Error("List does not exists");
        }
        return listUpdated;
    }
}