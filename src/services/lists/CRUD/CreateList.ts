import { List } from "@prisma/client";
import { Request } from "express";
import prisma from "../../../database/PrismaService";

export class CreateList {
    
    public async exec(req: Request): Promise<List> {
        const { name } = req.body;

        const existList = await prisma.list.findFirst({
            where: {
                name,
            }
        })

        if (existList) {
            throw new Error("List already exists!");
        }

        const createdList = await prisma.list.create({
            data: {
                name
            }
        })

        return createdList;
    }
}