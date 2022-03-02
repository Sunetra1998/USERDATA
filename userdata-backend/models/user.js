import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    id: Number,
    name: String,
    email: String,
    gender: String,
    status: String
});

const user = mongoose.model('user', userSchema);

export default user;