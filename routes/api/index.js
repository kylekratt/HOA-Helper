const router = require("express").Router();
const userRoutes = require("./passport");
const resRoutes = require("./resident");
const mailRoutes = require("./mail");

router.use("/passport", userRoutes);
router.use("/resident", resRoutes);
router.use("/mail", mailRoutes);
module.exports = router;