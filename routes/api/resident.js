var db = require("../../models");
const router = require("express").Router();


router.route("/add").post(function (req, res) {
    console.log(req.body);
    db.Resident.create(req.body).then(function (newRes) {
        console.log(req.user);
        db.User.findOneAndUpdate({ _id: req.user._id }, { $push: { residents: newRes._id } }, { new: true })
        .then((res) => {res.json({message: "Residents Updated!"})})
        .catch(function(err) { console.log(err); res.json(err)})
    }
    ).catch(function (err) {
        console.log(err);
        res.json(err);
    });
});
router.route("/list/:id").get(function (req, res) {
    db.User.findById(req.params.id)
        .populate({ path: "residents", populate: ("infractions") })
        .then(results => res.json(results))
        .catch(err => res.status(422).json(err));
})
router.route("/:id").get(function (req, res) {
    db.Resident.findById(req.params.id)
        .populate({path: "residents", populate:("infractions")})
        .then(results => res.json(results))
        .catch(err => res.status(422).json(err));
}).delete(function (req, res) {
    db.Resident.findByIdAndDelete(req.params.id)
        .then(db.User.findByIdAndUpdate(req.user, { "$pull": { "residents": req.params.id } },
            function (err, res) {
                if (err) throw err;
                
            }
        ).then(res.json({ message: "Resident Deleted! Who needs 'em, anyway?" }))
            .catch(err => res.status(422).json(err))
        )
        .catch(err => res.status(422).json(err));
})
router.route("/update").post(function (req, res) {
    db.Resident.findByIdAndUpdate(req.body.id, {name: req.body.name, address: req.body.address, email: req.body.address, phone: req.body.phone}, { new: true }).then(function (newRes) {
        res.json(newRes);
    }
    ).catch(function (err) {
        console.log(err);
        res.json(err);
    });

})

module.exports = router;