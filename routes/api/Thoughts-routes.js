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
router.route("/").get(getAllThoughts).post(addThoughts);

//
//
router
  .route("/:thoughtId")
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

//api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction);

router.route("/:thoughtId/:reactionsId").delete(removeReaction);

module.exports = router;
