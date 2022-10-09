import { List } from "@prisma/client";
import prisma from "../../../database/PrismaService";

export class FindAllLists {

    public async exec(): Promise<List[]> {
        
        return await prisma.list.findMany({
            select: {
                id: true,
                name: true,
                created_at: true,
                tasks: true
            }
        });
    }
}