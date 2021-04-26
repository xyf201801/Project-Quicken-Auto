import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

//to auth password which the user entered
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

//we don't need to bring it into our usercontroller since its already pre saved
userSchema.pre("save", async function (next) {
  //to check if something is modified
  if (!this.isModified("password")) {
    //if not modified then move on, else it will hash the password
    next();
  }
  //creating salt --**
  const salt = await bcrypt.genSalt(10);
  //resetting this to be the hashed password
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;
