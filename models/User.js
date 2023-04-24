import mongoose from "mongoose"

let schema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    photo: { type: String, required: true },
    role: { type: Number, required: true },
    is_online: { type: Boolean, required: true },
    is_verified: { type: Boolean, required: true },
    verify_code: { type: String, required: true }
}, {
    time_stamps: true
})

let collection = 'users';

let user = mongoose.model(schema, collection);

export default user;