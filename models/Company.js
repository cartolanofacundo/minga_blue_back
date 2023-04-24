import mongoose from "mongoose"

let schema = new mongoose.Schema({
    name: { type: String, required: true },
    logo: { type: String, required: true },
    website: { type: String, required: true },
    description: { type: String, required: true },
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: 'users',
        required: true
    },
    active: { type: Boolean, required: true },
}, {
    time_stamps: true
})

let collection = 'companies';

let company = mongoose.model(schema, collection);

export default company;