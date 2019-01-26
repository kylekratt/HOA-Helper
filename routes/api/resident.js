var db = require("../../models");
const router = require("express").Router();


router.route("/add").post(function (req, res) {
    console.log(req.body);
    db.Resident.create(req.body).then(function (newRes) {
        return db.User.findOneAndUpdate({ _id: req.user.id }, { $push: { resident: newRes._id } }, { new: true });
    }
    ).catch(function (err) {
        console.log(err);
        res.json(err);
    });
});
router.route("/list").get(function (req, res) {
    db.User.findById(req.User._id)
        .populate({ path: "residents", populate: ("infractions") })
        .then(results => res.json(results))
        .catch(err => res.status(422).json(err));
})
router.route("/:id").get(function (req, res) {
    db.Resident.findById(req.params.id)
        .populate("infractions")
        .then(results => res.json(results))
        .catch(err => res.status(422).json(err));
}).delete(function (req, res) {
    db.Resident.findByIdAndDelete(req.params.id)
        .then(db.User.findByIdAndUpdate(req.user, { "$pull": { "residents": req.params.id } },
            function (err, res) {
                if (err) throw err;
                res.json(res);
            }
        ).then(res.json({ message: "Resident Deleted! Who needs 'em, anyway?" }))
            .catch(err => res.status(422).json(err))
        )
        .catch(err => res.status(422).json(err));
})
router.route("/update").post(function (req, res) {
    db.Resident.findByIdAndUpdate(req.body._id, req.body, { new: true }).then(function (newRes) {
        res.json(newRes);
    }
    ).catch(function (err) {
        console.log(err);
        res.json(err);
    });

})

module.exports = router;