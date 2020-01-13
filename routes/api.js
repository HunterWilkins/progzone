let Bands = require("../models/bands");
module.exports = function(app) {
    
    app.post("/api/filldata", function(req, res){
        Bands.create({
            name: "Yes"
        }).then(function(dbBand){
            console.log(dbBand);
            res.json(dbBand);
        }).catch(err => console.log(err));
    })

    app.get("/api/bands/:band", function(req, res) {
        Bands.find({
            name: req.params.band
        }).then(function(dbBand) {
            res.json(dbBand);
        }).catch(err => console.log(err));
    });
}