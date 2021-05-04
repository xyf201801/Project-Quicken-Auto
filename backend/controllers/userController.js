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
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      // Generate a JWT token with validated user id
      token: generateToken(user._id),
    });
  } else {
    //Unauthorized Access
    res.status(401);
    throw new Error("Unrecognized email or password");
  }
});

//**Regestring new User
//** POST /api/users
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  //checking user by email
  const userExists = await User.findOne({ email });

  //if userexists then display there is a username already with that name
  if (userExists) {
    //400 bad request
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
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
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("User not found");
  }
});

//updating user profile
//PUT /api/users/profile
const updateUserProfile = asyncHandler(async (req, res) => {
  //const user = await User.findById(req.user._id);

  //this is whatever the current logged in user is
  const user = await User.findById(req.user._id);

  //returning res.json for the logged in user
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.status(201).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export { authUser, registerUser, getUserProfile, updateUserProfile };
