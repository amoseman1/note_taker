const router = require("express").Router();
const dbjson = require('../db/db.json');
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, '/db/db.json');

///rest of code gies here
//twoi routes- get and post, both /notes
//fs.readfile --> the db_.json file, take in the data in a .then function, res.json(data)
router.get('/notes', (req, res) => 
    res.json(dbjson));
    console.log(dbjson);

//post route, fs read file, read db json file, store in an array, add tthe new note to that array, 
//then write to db.json, then do res.json with updated array
router.post('/notes', (req, res) => {
    dbjson.push(req.body);
    console.log(dbjson);
    fs.writeFile(dbjson, JSON.stringify(dbjson), err => {
        if (err) {
          console.error(err)
          return
        }
        console.log('File written successfully!');
        
    });
    res.json(dbjson);
    res.end();
});



router.post('/notes/clear', (req, res) => {
    // Empty out the arrays of data
    dbjson.length = 0;
    dbjson.length = 0;

    res.json({ ok: true });
  });

module.exports = router