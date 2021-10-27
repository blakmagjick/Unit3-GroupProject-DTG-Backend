const mongoose = require('mongoose')

const gamerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    profilePic: {
        type: String,
    },
    age: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    faveGames: {
        type: [String],
        required: true,
    }
})


const Gamer = mongoose.model('Gamer', gamerSchema)

module.exports = Gamer