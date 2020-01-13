const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const exphbs = require("express-handlebars");
const app = express();

let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/progzone";


app.use(express.static("public"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

mongoose.connect(MONGODB_URI, {useNewUrlParser: true , useUnifiedTopology: true });
mongoose.set("useCreateIndex", true);


app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

require("./routes/html")(app);
require("./routes/api")(app);

app.listen(PORT, () => {
    console.log("ProgZone Listening on " + PORT);
});