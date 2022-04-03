const router = require("express").Router();

const {
  getAllUsers,
  getUseraById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/user-controller");

// Set up GET all and POST at /api/users

// Get route to get all user * post route to create a new user
router.route("/").get(getAllUsers).post(createUser);

// Using the user Id, we can get a single user, delete a user, and update a user
router.route("/:id").get(getUseraById).put(updateUser).delete(deleteUser);

router.route("/:id/friends/:friendId").post(addFriend).delete(deleteFriend);
module.exports = router;
