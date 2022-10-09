import prisma from "../../database/PrismaService";

export class ValidatorTask {

    public async exec(task: string) {

      const validTask = await prisma.task.findFirst({
            where: {
                task: task
            }
        })

        if (!validTask) {
            throw new Error('the task received does not exists!');
        }
        return validTask;
    }
}