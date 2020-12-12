const router = require("express").Router();

///rest of code gies here
//twoi routes- get and post, both /notes
          //fs.readfile, read the db_.json file, take in the data in a .thrn function, res.json(data)
app.get('/notes', (req, res) => res.json(characters));

//post route, fs read file, read db json file, store in an array, add tthe new note to that array, 
//then write to db.json, then do res.json with updated array





module.exports = router