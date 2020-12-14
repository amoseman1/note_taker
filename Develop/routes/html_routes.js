// .router method allows us to write our routes in diff files but allows us to use the same instince of express
const router = require("express").Router();
const path = require("path");

//HTML routes
router.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));
router.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "../public/notes.html")));
router.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

module.exports = router