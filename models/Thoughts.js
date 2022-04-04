const { Schema, model, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");
const ReactionSchema = require("./Reaction");

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      trim: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },

    // use ReplySchema to validate data for a reply
    reactions: [ReactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Thoughts = model("Thoughts", ThoughtSchema);

// virtual to remove the documents once deleted.
ThoughtSchema.pre("remove", function (next) {
  // Remove all the assignment docs that reference the removed person.
  this.model("Thoughts").remove({ ThoughtId: this._id }, next);
});

ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

module.exports = Thoughts;
