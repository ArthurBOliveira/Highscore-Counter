const express = require('express');
const bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose');
let {Highscore} = require('./models/highscore');

let app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/highscore', (req, res) => {
    Highscore.find().then((highscores) => {
        if(!highscores) return res.status(404).send();

        res.send(highscores);
    }, (e) => {
        res.status(400).send(e);        
    });
});

app.get('/highscore/listbygame/:game', (req, res) => {
    let game = req.params.game;

    console.log(game);
    if(game === null) return res.status(400).send();

    Highscore.find({game}).then((highscores) => {
        if(!highscores) return res.status(404).send();

        res.send(highscores);
    }).catch((e) => {
        res.status(400).send(e);        
    });
});

app.post('/highscore', (req, res) => {
    let highscore = new Highscore(req.body);
    
    highscore.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(port, () => {
    console.log('Server on Port: ' + port);
});

module.exports = {app};