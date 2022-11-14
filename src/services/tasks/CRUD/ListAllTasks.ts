import prisma from "../../../database/PrismaService";

export class ListAllTasks {
    
    public async exec() {
        const allTasks = await prisma.task.findMany({
            include: {
                list:true
            }
        })
        return allTasks;
    }
}