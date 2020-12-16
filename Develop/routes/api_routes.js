const router = require("express").Router();
const dbjson = require('../db/db.json');
const fs = require('fs');




///rest of code gies here
//twoi routes- get and post, both /notes
//fs.readfile --> the db_.json file, take in the data in a .then function, res.json(data)
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

//post route, fs read file, read db json file, store in an array, add tthe new note to that array, 
//then write to db.json, then do res.json with updated array
router.post('/notes', (req, res) => {
    let notes = req.body
    //aftger you get notes ^ 
    // you'll need to attach a key value par of "id" : "randomstringofletttersornumbers"
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

    // //console.log(dbjson);

    // fs.writeFile('db/db.json', JSON.stringify(newerNote), err => {
    //     if (err) {
    //         console.error(err)
    //         return
    //     }
    //     res.json(newNoteArray)
    //     console.log('File written successfully!');

    // });

});

module.exports = router