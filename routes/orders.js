// routes/orders.js
import express from "express";
import jwt from "jsonwebtoken";
import Order from "../models/Order.js";

const router = express.Router();
const JWT_SECRET = "your_secret_key";

// Middleware to check authentication
function authenticate(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    res.status(403).json({ message: "Forbidden" });
  }
}

// Fetch all orders
router.get("/", authenticate, async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

// Sync orders (admin only)
router.post("/sync", authenticate, async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Permission denied" });
  }

  const { newOrders } = req.body;
  await Order.insertMany(newOrders);
  res.json({ message: "Orders synced successfully" });
});

export default router;
