import { List } from "@prisma/client";
import { Request } from "express";
import prisma from "../../../database/PrismaService";
import { ValidateList } from "../validateList";

export class DeleteList {

    public async exec(req: Request): Promise<String> {

        const { name }= req.body;
        console.log(name)

        const validateList = new ValidateList();
        const validList = await validateList.exec(name);

        await prisma.list.delete({
            where: {
                id: validList.id
            }
        })
        return 'List deleted successfully!'
    }
}