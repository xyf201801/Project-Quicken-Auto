import asyncHandler from "express-async-handler";
import { isError } from "node:util";
import User from "../models/userModel.js";

//**Authentating User and also possibly get tokens
//** POST /api/users/login
const authUser = asyncHandler(async (req, res) => {
  //getting data from the body
  //res.body,will grant the access that is sent to the body
  //ex "email": "test@gmail.com", "password": 12345

  //destructuring
  const { email, password } = req.body;

  //checking if the email and password that's being sent works
  //accessing that req from req.body
  //res.send({ email, password });

  //quering data, to find email from the user table
  const user = await User.findOne({ email });

  //getting the password from the dosy in plain text
  //trying to match the plain text to the encrypted password using the decrypt
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      user: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: null,
    });
  } else {
    res.status(401);
    throw new Error("Unrecognized email or password");
  }
});

export { authUser };
