const db = require("../db/db.json");
const path = require("path");
const fs = require("fs");
  
  module.exports = function (app) {
    //
    app.get("./api/notes", function(req,res){
      res.sendFile(path.join(__dirname, "./db/db.json"));
    });
    
    app.post("./api/notes", function(req,res){

    });
  };
