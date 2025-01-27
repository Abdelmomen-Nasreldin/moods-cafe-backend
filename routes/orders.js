// routes/orders.js
import express from "express";
import { getOrders, syncOrders } from "../controllers/orderController.js";
import { authenticate, authorize, ROLES } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", authenticate, getOrders); // need to add device identifier
router.post("/sync", authenticate, authorize(ROLES.CASHIER), syncOrders); // need to add device identifier


export default router;
