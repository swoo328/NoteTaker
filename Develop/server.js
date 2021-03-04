var express = require("express");
const path = require("path");
const uuid = require("uuidv4");
const app = express();
var PORT = 3000;

app.listen(PORT, function*(){
    console.log("APP listening on PORT " + PORT);
});