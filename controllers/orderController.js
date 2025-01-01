// controllers/orderController.js
import Order from "../models/Order.js";

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

const syncOrders = async (req, res) => {
  try {
    const { newOrders } = req.body;
    await Order.insertMany(newOrders);
    res.json({ message: "Orders synced successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

export { getOrders, syncOrders };
