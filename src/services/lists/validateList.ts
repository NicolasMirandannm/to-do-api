import { List } from "@prisma/client";
import prisma from "../../database/PrismaService";

export class ValidateList {
    
    public async exec(uniqueName: string): Promise<List> {
        const existentList = await prisma.list.findFirst({
            where: {
                name: uniqueName
            }
        })

        if(!existentList) {
            throw new Error('List does not exists');
        }

        return existentList;
    }
}
