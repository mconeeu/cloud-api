import express, {Request, Response} from "express";
import {AuthController} from "../controls/AuthController";

export const authRouter = express.Router();

authRouter.get('/', (req: Request, res: Response) => {
    res.sendStatus(200);
});

authRouter.post('/create', (req: Request, res: Response) => AuthController.create(req, res));

authRouter.post('/remove', (req: Request, res: Response) => AuthController.remove(req, res));

authRouter.get('/list', (req: Request, res: Response) => AuthController.list(req, res));

