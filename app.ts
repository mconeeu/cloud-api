import Sentry = require('@sentry/node');
import express = require('express');
import http = require('http');

import {EventEmitter} from "events";

// Services
import {SentryService} from "./services/SentryService";
import {MongooseService} from "./services/MongooseService";

import * as net from 'net'

//Routes
import {apiRouter} from "./routes/ApiRoute";
import {authRouter} from "./routes/AuthRoute";
import {Server, Socket} from "socket.io";
import {OutgoingHttpHeaders} from "http";
import {TCPServer} from "./services/TCPServer";

export let server: TCPServer;

try {
    //read .env file
    require('dotenv').config({path: __dirname + '/.env'});

    //initialize express
    const app: express.Application = express();

    //initialize sentry logging
    const sentry: SentryService = new SentryService();

    //connect to mongodb database
    const database: MongooseService = new MongooseService();
    database.connect();

    //register routers
    app.use('/api/v1', apiRouter);
    app.use('/api/v1/auth', authRouter);

    app.listen(process.env.PORT, function () {
        console.log('cloud rest-api listening on port ' + process.env.PORT);
    });

    // const WebSocket = require('ws');
    // const wss = new WebSocket.Server({port: 3000});
    //
    // let i: number;
    // wss.on('connection', function connection(ws: any) {
    //     console.log("new connection")
    //     ws.on('message', function incoming(message: any) {
    //         console.log('Client: %s', message);
    //         ws.send('Server: ' + i);
    //         i++;
    //     });
    //
    //     ws.send('hello');
    // });

    // Normal Socket (Works with java)
    server = new TCPServer(3000);
} catch (e) {
    Sentry.captureException(e);
}
