import mongoose from "mongoose";
import "dotenv/config";

export namespace Service {
    export class MongooseService {
        public connect(): void {
            mongoose.connect(`${process.env.MONGO_URI}`, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }).then(r => {
                console.log("[MongoDB] connected")
            });
        }
    }
}
