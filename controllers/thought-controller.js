const { User, Thoughts } = require("../models");

const ThoughtsController = {
  // add users thoughts
  addThoughts({ params, body }, res) {
    Thoughts.create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: params.UserId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then((dbThoughtsData) => {
        if (!dbThoughtsData) {
          res.status(404).json({ message: "No thoughts for user!" });
          return;
        }
        res.json(dbThoughtsData);
      })
      .catch((err) => res.json(err));
  },

  // add reaction to thought
  addReaction({ params, body }, res) {
    Thoughts.findOneAndUpdate(
      { _id: params.ThoughtId },
      { $push: { reactions: body } },
      { new: true }
    )
      .then((dbThoughtsData) => {
        if (!dbThoughtsData) {
          res.status(404).json({ message: "No thoughts for user!" });
          return;
        }
        res.json(dbThoughtsData);
      })
      .catch((err) => res.json(err));
  },

  // remove thought
  removeThought({ params }, res) {
    Thoughts.findOneAndDelete({ _id: params.ThoughtId })
      .then((deleteThought) => {
        if (!deleteThought) {
          return res.status(404).json({ message: "No thought with this id!" });
        }
        return User.findOneAndUpdate(
          { _id: params.UserId },
          { $pull: { thoughts: params.thoughtsId } },
          { new: true }
        );
      })
      .then((dbThoughtsData) => {
        if (!dbThoughtsData) {
          res.status(404).json({ message: "No thought found with this id!" });
          return;
        }
        res.json(dbThoughtsData);
      })
      .catch((err) => res.json(err));
  },
  // remove reply
  removeReply({ params }, res) {
    Comment.findOneAndUpdate(
      { _id: params.commentId },
      { $pull: { replies: { replyId: params.replyId } } },
      { new: true }
    )
      .then((dbThoughtsData) => res.json(dbPizzaData))
      .catch((err) => res.json(err));
  },

  // get all thoughts
  getAllThoughts(req, res) {
    Thoughts.find({})
      .select("-__v")
      .sort({ _id: -1 })
      .then((dbThoughtsData) => res.json(dbThoughtsData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // get one thought
  getThoughtById({ params }, res) {
    Thoughts.findOne({ _id: params.id })
      .then((dbThoughtsData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No thought found!" });
          return;
        }
        res.json(dbThoughtsData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
};

module.exports = commentController;
