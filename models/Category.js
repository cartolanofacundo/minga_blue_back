import mongoose from "mongoose"

let schema = new mongoose.Schema({
    name: { type: String, required: true },
    color: { type: String, required: true },
    hover: { type: String, required: true },
    description: { type: String, required: true },
    cover_photo: {type: String, required: true},
    character_photo: {type: String, required: true}
}, {
    time_stamps: true
})

let collection = 'categories';

let category = mongoose.model(schema, collection);

export default category;