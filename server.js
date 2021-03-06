var express = require("express");

// Initialize express app
let app = express();
const PORT = process.env.PORT || 3000;
// Setup data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
//Routers 
//These routes will give the server a direction 
// and takes the user to the requested URLS.
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);
//Setup Listener
app.listen(PORT, function(){
    console.log("APP listening on PORT " + PORT);
});