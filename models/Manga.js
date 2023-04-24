import mongoose from "mongoose"

let schema = new mongoose.Schema({
    author_id: {
        type: mongoose.Types.ObjectId,
        ref: 'authors',
        required: true
    },
    company_id: {
        type: mongoose.Types.ObjectId,
        ref: 'companies',
        required: true
    },
    title: { type: String, required: true },
    cover_photo: { type: String, required: true },
    description: { type: String, required: true },
    category_id: {
        type: mongoose.Types.ObjectId,
        ref: 'categories',
        required: true
    },
}, {
    time_stamps: true
})

let collection = 'mangas';

let manga = mongoose.model(schema, collection);

export default manga;