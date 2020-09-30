import Sentry = require('@sentry/node');
import express = require('express');

// Services
import {Service} from "./services/SentryService";

//Routes
import {apiRouter} from "./routes/ApiRoute";
import {authRouter} from "./routes/AuthRoute";

try {
    //read .env file
    require('dotenv').config({path: __dirname + '/.env'});

    //initialize express
    const app: express.Application = express();

    //initialize sentry logging
    const sentry: Service.SentryService = new Service.SentryService();

    //register routers
    app.use('/api/v1', apiRouter);
    app.use('/api/v1/auth', authRouter);

    app.listen(process.env.PORT, function () {
        console.log('cloud rest-api listening on port ' + process.env.PORT);
    });
} catch (e) {
    Sentry.captureException(e);
}
