const mongoose = require('mongoose');

let Highscore = mongoose.model('Highscore', {
    player: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    score: {
        type: Number,
        required: true        
    },
    game: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = {Highscore};