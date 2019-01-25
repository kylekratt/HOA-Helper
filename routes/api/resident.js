var db = require("../../models");

module.exports = function (app) {
    app.post("/add", function (req, res) {
        console.log(req.body);
        db.Resident.create(req.body).then(function (newRes) {
            return db.User.findOneAndUpdate({ _id: req.user.id }, { $push: { Resident: newRes._id } }, { new: true });
        }
        ).catch(function (err) {
            console.log(err);
            res.json(err);
        });
    });
    app.get("/list", function (req, res) {
        db.User.findById(req.User._id)
            .populate("Resident")
            .then(results => res.json(results))
            .catch(err => res.status(422).json(err));
    })
}