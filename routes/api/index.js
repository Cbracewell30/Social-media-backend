const router = require("express").Router();
const UserRoutes = require("./User-routes");
const ThoughtsRoutes = require("./Thoughts-routes");

// Creating routes for USer and thoughts
router.use("/users", UserRoutes);
router.use("/thoughts", ThoughtsRoutes);

module.exports = router;
