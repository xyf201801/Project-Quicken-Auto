import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("12345678", 10),
    isAdmin: true,
  },

  {
    name: "Adam King",
    email: "adam_king@gmail.com",
    password: bcrypt.hashSync("12345678", 10),
    isAdmin: false,
  },

  {
    name: "Jhonny Denver",
    email: "JhonnyDenver@gmail.com",
    password: bcrypt.hashSync("12345678", 10),
    isAdmin: false,
  },
];

export default users;
