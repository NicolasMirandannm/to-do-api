import { Handler, Request, Response, NextFunction } from "express";

const resolver = (handlerFn: Handler) => {
    return (req: Request, res: Response, next: NextFunction) => {
        return Promise.resolve(handlerFn(req, res, next))
        .catch(err => next(err));
    }
}

export { resolver };