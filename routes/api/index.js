const router = require("express").Router();
const UserRoutes = require("./passport");

// Book routes
router.use("/passport", UserRoutes);

module.exports = router;