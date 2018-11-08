import * as mongoose from 'mongoose';
import * as passportLocalMongoose from 'passport-local-mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({

    username: {
        type: String
    },

    password: {
        type: String
    }
}).plugin(passportLocalMongoose);

export const model = mongoose.model('User', UserSchema);
