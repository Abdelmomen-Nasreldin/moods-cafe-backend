import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
// import cors from "cors";
// import { connectDB } from "./config/db.js";
// import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orders.js";
import authRoutes from "./routes/auth.js";

dotenv.config(); // This line loads the environment variables from the .env file

const app = express();

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to the database
// connectDB();

// Routes
app.use("/auth", authRoutes);
app.use("/orders", orderRoutes)

// app.use((err, req, res, next) => {
//     res.status(500).send({ message: err.message });
// });

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});