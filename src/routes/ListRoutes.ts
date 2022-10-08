import { Router } from "express";
import { ListController } from "../controllers/ListController";
import { resolver } from "./errorHandler/Resolver";

const listRoutes = Router();
const listController = new ListController();

listRoutes.get("/list/findAll", resolver(listController.findAll));
listRoutes.get("/list/find", resolver(listController.findOne));
listRoutes.post("/list/create", resolver(listController.create));
listRoutes.put("/list/update", resolver(listController.update));
listRoutes.delete("/list/delete", resolver(listController.delete));

export { listRoutes };