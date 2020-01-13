const path = require("path");
const root = path.join(__dirname, "../");

module.exports = function(app) {
    app.get("/band/:name", function(req, res) {
        res.render("band");
    });
}