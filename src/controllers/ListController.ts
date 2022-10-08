import { Request, Response } from "express";
import { CreateList } from "../services/lists/CRUD/CreateList";
import { DeleteList } from "../services/lists/CRUD/DeleteList";
import { FindAllLists } from "../services/lists/CRUD/FindAllLists";
import { FindOneList } from "../services/lists/CRUD/FindList";
import { UpdateList } from "../services/lists/CRUD/UpdateList";

export class ListController {

    public async findOne(req:Request, res: Response) {
        const findList = new FindOneList();
        const list = await findList.exec(req);

        return res.json(list)
    }

    public async findAll(req: Request, res: Response) {
        const findAll = new FindAllLists();
        const lists = await findAll.exec();

        return res.json(lists);
    }

    public async create(req: Request, res: Response) {
        const createList = new CreateList();
        const createdList = await createList.exec(req);

        return res.json(createdList);
    }

    public async update(req: Request, res: Response) {
        const updateList = new UpdateList();
        const updatedList = await updateList.exec(req);

        return res.json(updatedList);
    }

    public async delete(req: Request, res: Response) {
        const deleteList = new DeleteList();
        const deletedList = await deleteList.exec(req);

        return res.json(deletedList);
    }
}