import { List } from "@prisma/client";
import { Request } from "express";
import prisma from "../../database/PrismaService";

export class RemoveAllTaskFromList {

    public async exec(req: Request): Promise<List> {

        const { list } = req.body;

        await prisma.task.updateMany({
            where: {
                listId: list.id
            },
            data: {
                listId: null
            }
        })

        const listUpdated = await prisma.list.findFirst({
            where: {
                id: list.id
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