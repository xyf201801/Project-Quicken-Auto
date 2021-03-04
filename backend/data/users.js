import bcrypt from "bcryptjs";

const users = [
  {
    name: "Adminaa User",
    email: "adminaa@gmail.com",
    password: bcrypt.hashSync("12345678", 10),
    isAdmin: true,
  },

  {
    name: "Adam King",
    email: "adam@gmail.com",
    password: bcrypt.hashSync("12345678", 10),
    isAdmin: false,
  },

  {
    name: "Jhonny Denver",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("12345678", 10),
    isAdmin: false,
  },
];

export default users;
