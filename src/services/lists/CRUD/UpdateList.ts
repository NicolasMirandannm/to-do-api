import { List } from "@prisma/client";
import { Request } from "express";
import prisma from "../../../database/PrismaService";
import { ValidateList } from "../validateList";

export class UpdateList {

    public async exec(req: Request): Promise<List> {
        const { id,name } = req.body;

        const validList = await prisma.list.findFirst({
            where: {
                id
            }
        })

        if (!validList) {
            throw new Error('List does not exists!');
        }

        return await prisma.list.update({
            where: {
                id: validList.id
            },
            data: {
                name
            }
        })
    }
}