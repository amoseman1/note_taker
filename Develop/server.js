// Dependencies
const express = require('express');
const apiRoutes = require("./routes/api_routes");
const htmlRoutes = require("./routes/html_routes");

const app = express(); //the var of app is our own instance of the express package
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public")); // keeps the filepath beginning at public
app.use("/api", apiRoutes); //middleware that allows us to use our routes from other files
app.use("/", htmlRoutes);


// Listener

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
});
