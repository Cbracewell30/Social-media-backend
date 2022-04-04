const { Schema, model } = require("mongoose");

// creating user schema

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      email: true,
      unique: true,
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thoughts",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },

  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// create the User model using the UserSchema
const User = model("User", UserSchema);

// get total count of friends
UserSchema.virtual("FriendCount").get(function () {
  return this.friends.length;
});
// export the User model
module.exports = User;
