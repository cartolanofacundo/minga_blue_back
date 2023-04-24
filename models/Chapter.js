import mongoose from "mongoose"

let schema = new mongoose.Schema({
    manga_id: {
        type: mongoose.Types.ObjectId,
        ref: 'mangas',
        required: true
    },
    title: { type: String, required: true },
    cover_photo: { type: String, required: true },
    pages: [{ type: String, required: true }],
    order: { type: Number, required: true }
}, {
    time_stamps: true
})

let collection = 'chapters';

let chapter = mongoose.model(collection, schema);

export default chapter;