const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    profilePic: {
        type: String,
    },
    location: {
        type: String,
        required: true,
    },
    faveGames: {
        type: [String],
        required: true,
    },
    userLoggedIn: {
        type: Boolean,
        default: false
    },
})

const User = mongoose.model('User', userSchema)

module.exports = User