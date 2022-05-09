const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      first: {
        type: String,
        required: true,
        minlength: 2,
        trim: true,
      },
      last: {
        type: String,
        required: true,
        minlength: 2,
        trim: true,
      },
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 4,
      trim: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    poste: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  console.log(user);
  if (user) {
    if (password === user.password) {
      return user;
    }
    throw Error(" mot de passe incorrect");
  }
};

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
