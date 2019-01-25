var db = require("../../models");
const router = require("express").Router();

router.route("/add").post(function (req, res) {
    console.log(req.body);
    db.Infraction.create(req.body).then(function (newInf) {
        return db.Resident.findOneAndUpdate({ _id: req.body.id }, { $push: { infraction: newInf._id } }, { new: true });
    }
    ).catch(function (err) {
        console.log(err);
        res.json(err);
    });
});

router.route("/:id").get(function (req, res) {
    db.Infraction.findById(req.params.id)
        .then(results => res.json(results))
        .catch(err => res.status(422).json(err));
}).delete(function (req, res) {
    db.Infraction.findByIdAndDelete(req.params.id)
        .then(db.Resident.findByIdAndUpdate(req.body.id, { "$pull": { "infractions": req.params.id } },
            function (err, res) {
                if (err) throw err;
                res.json(res);
            }
        ).then(res.json({ message: "Infraction Deleted!"}))
            .catch(err => res.status(422).json(err))
        )
        .catch(err => res.status(422).json(err));
})

router.route("/update").post(function (req, res) {
    db.Infraction.findByIdAndUpdate(req.body._id, req.body, { new: true }).then(function (newRes) {
        res.json(newRes);
    }
    ).catch(function (err) {
        console.log(err);
        res.json(err);
    });

})