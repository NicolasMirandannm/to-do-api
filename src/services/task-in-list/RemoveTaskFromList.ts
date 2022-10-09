import { Task } from "@prisma/client";
import { Request } from "express";


export class RemoveTaskFromList {

    public async exec(req: Request): Promise<Task> {
        

        return updatedTask;
    }
}