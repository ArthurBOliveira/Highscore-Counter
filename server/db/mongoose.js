const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://user:highscore@ds147864.mlab.com:47864/highscore-counter');

module.exports = {mongoose};