import Sentry = require('@sentry/node');
import "../app";

export namespace Service {
    export class SentryService {
        SENTRY_DNS: string = "";

        constructor() {
            if (process.env.MODE === "prod") {
                console.log("prod")
                this.SENTRY_DNS = `${process.env.SENTRY_DNS}`;

                Sentry.init({
                    dsn: this.SENTRY_DNS,
                    release: process.env.npm_package_name + "@" + process.env.npm_package_version,
                });

                //Set custom tags
                Sentry.setTag("app_id", `${process.env.APP_ID}`)
                Sentry.setTag("port", `${process.env.PORT}`);
                Sentry.setTag("dev_mode", `${process.env.PORT}`)
                Sentry.setTag("express_version", `${process.env.npm_package_dependencies_express}`);

                console.log("Sentry started!")
            } else {
                this.SENTRY_DNS = "DEV_MODE";
            }
        }

        public getSentryDNS(): string {
            return this.SENTRY_DNS;
        }
    }
}
