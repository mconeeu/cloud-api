import express, {Request, Response} from "express";
import {server} from "../app";

export const apiRouter = express.Router();

apiRouter.get('/', (req: Request, res: Response) => {
    res.send({
        mode: (process.env.DEV_MODE ? "DEV" : "PROD"),
        version: process.env.npm_package_version
    });
});

apiRouter.get('/test', (req: Request, res: Response) => {
    console.log("test request")
    server.sendMessage(`${req.header("message")}`);
    res.sendStatus(200);
});
