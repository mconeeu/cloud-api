import Sentry = require('@sentry/node');
import express = require('express');
import {Service} from "./services/SentryService";
import {apiRouter} from "./routes/api.route";

try {
    //read .env file
    require('dotenv').config({path: __dirname + '/.env'});

    //initialize express
    const app: express.Application = express();

    //initialize sentry logging
    const sentry: Service.SentryService = new Service.SentryService();

    //register routers
    app.use('/api/v1', apiRouter);

    app.listen(process.env.PORT, function () {
        console.log('cloud rest-api listening on port ' + process.env.PORT);
    });
} catch (e) {
    Sentry.captureException(e);
}
