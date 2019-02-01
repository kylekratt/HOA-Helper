const router = require("express").Router();
const userRoutes = require("./passport");
const resRoutes = require("./resident");
const mailRoutes = require("./mail");
const infRoutes = require("./infraction");

router.use("/passport", userRoutes);
router.use("/resident", resRoutes);
router.use("/mail", mailRoutes);
router.use("/infraction", infRoutes)
module.exports = router;