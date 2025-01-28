// routes/orders.js
import express from "express";
import { getOrders, syncOrders } from "../controllers/orderController.js";
import { authenticate, authorize } from "../middlewares/authMiddleware.js";
import { ROLES } from "../constants/user-roles.js";

const router = express.Router();

router.get("/", authenticate, getOrders); // need to add device identifier
router.post("/sync", authenticate, authorize(ROLES.CASHIER), syncOrders); // need to add device identifier


export default router;
