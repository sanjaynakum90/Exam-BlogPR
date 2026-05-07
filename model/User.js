import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "name must be required"],
        trim: true
    },
    password: {
        type: String
    }
})

const User = mongoose.model("user",);