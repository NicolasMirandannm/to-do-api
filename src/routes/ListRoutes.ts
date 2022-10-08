import { Router } from "express";

const listRoutes = Router();

listRoutes.get('/list', (req, res) => {
    res.send('Hello World from list');
})

export { listRoutes };