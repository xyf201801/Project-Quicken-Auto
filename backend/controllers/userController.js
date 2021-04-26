import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";

//**Authentating User and storing tokens
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
  //*after validating, checking the user with the email

  //getting the password from the body in plain text
  //trying to match the plain text to the encrypted password using the decrypt

  //*if user exixts put in user variable then match the password
  if (user && (await user.matchPassword(password))) {
    //** if email and password matches return the json data back with the token which has the user._id embedded as the payload
    res.json({
      _id: user._id,
      user: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Unrecognized email or password");
  }
});

//Getting user profile
//GET /api/users/profile
//Private access
const getUserProfile = asyncHandler(async (req, res) => {
  //const user = await User.findById(req.user._id);

  //this is whatever the current logged in user is
  const user = await User.findById(req.user._id);

  //returning res.json for the logged in user
  if (user) {
    res.json({
      _id: user._id,
      user: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("User not found");
  }
});

export { authUser, getUserProfile };
