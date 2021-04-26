import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  //console.log(req.headers.authorization);
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //split(" ")[1] means that it will turn into an array where Barer is the 0 index and token is 1 index
      token = req.headers.authorization.split(" ")[1];
      //decoded token includes the id:, iat: and exp
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //fetching the user by decoded.id, but minusing the password
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

export { protect };
