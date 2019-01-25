const router = require("express").Router();
const userRoutes = require("./passport");
const resRoutes = require("./resident");

router.use("/passport", userRoutes);
router.use("/resident", resRoutes);

module.exports = router;