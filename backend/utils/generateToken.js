import jwt from "jsonwebtoken";
//using auth middleware, it will be able to use the token to validate and access protected routes
const generateToken = (id) => {
  //payload will be an object with ID
  //generating token which will last 30 days
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export default generateToken;
