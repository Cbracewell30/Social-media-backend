const router = require("express").Router();
const UserRoutes = require("./User-routes");
const commentRoutes = require("./Thoughts-routes");
// add prefix of `/pizzas` to routes created in `pizza-routes.js`
router.use("/users", pizzaRoutes);
router.use("/thoughts", commentRoutes);

module.exports = router;
