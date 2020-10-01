import {Request, Response} from "express";
import UserModel from "../models/UserModel";

import {v4 as uuid} from 'uuid';

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

export class AuthController {
    static auth(req: Request, res: Response, next: void) {

    }

    static create(req: Request, res: Response) {
        // const {username, password} = req.headers;
        //
        // if (username !== undefined && password !== undefined) {
        //     const user = UserModel.findOne({
        //         username: `${username}`
        //     });
        //
        //     if (user === null) {
        //         console.log("NEW !")
        //     }
        //
        //     const hashedPassword = bcrypt.hashSync(password, 8);
        //
        //     UserModel.create({
        //         username: `${username}`,
        //         password: `${hashedPassword}`,
        //     }, (err, user) => {
        //         if (err)
        //             return res.status(500).send("There was a problem registering the user.");
        //
        //         // create a token
        //         const token = jwt.sign({uuid: user[0]}, process.env.SECRET, {
        //             expiresIn: 86400 // expires in 24 hours
        //         });
        //
        //         res.status(200).send({auth: true, token: token});
        //     }).then(r => {
        //     });
        // } else {
        //     res.sendStatus(400);
        // }
    }

    static remove(req: Request, res: Response): void {

    }

    static list(req: Request, res: Response): void {

    }
}
