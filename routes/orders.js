// routes/orders.js
import express from "express";
import { getOrders, syncOrders } from "../controllers/orderController.js";
import { authenticate, authorize } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", authenticate, getOrders);
router.post("/sync", authenticate, authorize(["admin"]), syncOrders);


export default router;
