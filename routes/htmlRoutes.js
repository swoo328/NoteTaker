var path = require("path");

module.exports = function (app) {
    // Routes
    // Default to the index page if nothing is found
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    //This will take you to the notes.html page
    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

}   