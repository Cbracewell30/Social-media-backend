const router = require("express").Router();
const {
  addThoughts,
  removeReaction,
  getAllThoughts,
  getThoughtById,
  removeThought,
  addReaction,
  updateThought,
} = require("../../controllers/thought-controller");

// Get all thoughts
router.route("/").get(getAllThoughts);

// add a thought
router.route("/:userId").post(addThoughts);

//
router.route("/:userId/:thoughtId").put(updateThought).delete(removeThought);
//
router.route("/:thoughtId").get(getThoughtById);

//api/thoughts/:thoughtId/reactions
router.get("/:thoughtId/reactions").put(addReaction);

module.exports = router;
