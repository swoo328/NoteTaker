const db = require("../db/db.json");
const path = require("path");
const fs = require("fs");
const { debug } = require("console");

module.exports = function (app) {
  //gets the notes that are being created 
  app.get("/api/notes", function (req, res) {
    res.send(db);
    // console.log(db);
  });
  //Creates the notes and saving it to the database
  app.post("/api/notes", function (req, res) {
    let newNote = {
      title: req.body.title,
      text: req.body.text,
      //length of the data in the database
      id: db.length
    };
    //pushes the Note to the database
    db.push(newNote);
    fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(db), err => {
      if (err) { console.log(err) }
      res.send(newNote);
    });
  });
  //Delete the notes 
  app.delete("/api/notes/:id", (req, res) => {
    db.splice(req.params.id,1);
    db.forEach(note=> {
        note.id=db.indexOf(note)
    })
     
    fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(db), err => {
      if (err) { console.log(err) }
      console.log(db);
      res.send(db);
      console.log("The note is deleted!")
    });
  });
};

