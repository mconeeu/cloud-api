import mongoose, {Schema, Document} from 'mongoose';

export interface IUser extends Document {
    username: string;
    password: string;
}

const UserSchema: Schema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true}
}, {
    versionKey: false
});

export default mongoose.model<IUser>('User', UserSchema, "users");
