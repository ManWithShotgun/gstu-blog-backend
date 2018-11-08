import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const BlogSchema = new Schema({
    content: {
        type: String,
        required: 'content of topic'
    },
    author: {
        type: String,
        required: 'Author of the topic'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
