const router = require("express").Router();
const dbjson = require('../db/db.json');
const fs = require('fs');

//Get route handler
router.get('/notes', (req, res) =>
    fs.readFile('db/db.json', "utf8", (err, notes) => {
        if (err) {
            console.error(err)
            return
        }
        let parsedNotes = JSON.parse(notes)
        console.log('get from frontend', parsedNotes)
        return res.json(parsedNotes);

    }));

//Post route handler
router.post('/notes', (req, res) => {
    let notes = req.body
    fs.readFile('db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return
        }

        let oldNotes = JSON.parse(data)
        let newNotes = [...oldNotes, notes]

        fs.writeFile('db/db.json', JSON.stringify(newNotes), error => {
            if (error) {
                console.log(error)
            }
            res.sendStatus(200)
        })



    });
});

module.exports = router