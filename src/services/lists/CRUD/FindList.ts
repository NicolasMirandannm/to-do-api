import { List } from "@prisma/client";
import { Request } from "express";
import prisma from "../../../database/PrismaService";

export class FindOneList {

    public async exec(req: Request): Promise<List> {
        const { name } = req.body;

        const uniqueList = await prisma.list.findFirst({
            where: {
                name
            },
            select: {
                id: true,
                name: true,
                created_at: true,
                tasks: true,
            }
        })

        if (!uniqueList) {
            throw new Error('List does not exists!');
        }

        return uniqueList;
    }
}