// const bcrypt = require("bcrypt");
import bcrypt from "bcrypt";
// Predefined usernames and passwords
const users = [
  { username: "cashier", password: "cashier123", role: "admin" },
  { username: "analyst1", password: "analyst123", role: "reader" },
  { username: "analyst2", password: "analyst123", role: "reader" },
];

export const hashPasswords = async () => {
  for (let user of users) {
    // const hashedPassword = await bcrypt.hash(user.password, 10); // Salt rounds = 10
    // console.log(`Username: ${user.username}, Hashed Password: ${hashedPassword}, Role: ${user.role}`);
    //   if (!user.isModified("password")) return next();
      const hashedPassword = await bcrypt.hash(user.password, 10)
    console.log(`Username: ${user.username}, Hashed Password: ${hashedPassword}, Role: ${user.role}`);

  }
};

