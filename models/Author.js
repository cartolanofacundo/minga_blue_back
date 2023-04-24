import mongoose from "mongoose"

let schema = new mongoose.Schema({
    name: { type: String, required: true },
    last_name: { type: String, required: false },
    city: { type: String, required: true },
    country: { type: String, required: true },
    date: { type: Date, required: false },
    photo: { type: String, required: true },
    user_id: { 
        type: mongoose.Types.ObjectId,
        ref: 'users',
        required: true
     },
    active: { type: Boolean, required: true }
}, {
    time_stamps: true
})

let collection = 'authors';

let author = mongoose.model(schema, collection);

export default author;