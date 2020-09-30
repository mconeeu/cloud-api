import express, { Request, Response } from "express";
export const apiRouter = express.Router();

apiRouter.get('/', (req: Request, res: Response) => {
    res.send({
        mode: (process.env.DEV_MODE ? "DEV" : "PROD"),
        version: process.env.npm_package_version
    });
});
