// const bcrypt = require("bcrypt");
import bcrypt from "bcrypt";
import { ROLES } from "../constants/user-roles.js";

// Predefined usernames and passwords
const users  = [
  { username: 'owner', password: 'moods-admin', role: ROLES.ADMIN },
  { username: 'cashier', password: 'moods2025', role: ROLES.CASHIER },
  { username: 'owner read only', password: 'moods-read', role: ROLES.READ_ONLY },
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

