import prisma from "../../database/PrismaService";

export class ListAllTasksService {
    
    public async exec() {
        const allTasks = await prisma.task.findMany({})
        return allTasks;
    }
}