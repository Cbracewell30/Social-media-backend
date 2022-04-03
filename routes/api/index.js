const router = require("express").Router();
const UserRoutes = require("./User-routes");
const ThoughtsRoutes = require("./Thoughts-routes");
// add prefix of `/pizzas` to routes created in `pizza-routes.js`
router.use("/users", UserRoutes);
router.use("/thoughts", ThoughtsRoutes);

module.exports = router;
