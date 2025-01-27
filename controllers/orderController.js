// controllers/orderController.js
import Order from "../models/Order.js";

const getOrders = async (req, res) => {
  try {
    console.log("wwwwwwwww");
    
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

const syncOrders = async (req, res) => {
  const { orders } = req.body;

  if (!Array.isArray(orders) || orders.length === 0) {
    return res.status(400).json({ message: 'Invalid or empty orders array' });
  }

  try {
    const bulkOps = orders.map((order) => ({
      updateOne: {
        filter: { orderId: order.orderId },
        update: { $set: order },
        upsert: true,
      },
    }));

    const result = await Order.bulkWrite(bulkOps);

    res.status(200).json({
      message: 'Sync successful',
      matchedCount: result.matchedCount,
      modifiedCount: result.modifiedCount,
      upsertedCount: result.upsertedCount,
    });
  } catch (error) {
    console.error('Order sync failed:', error);
    res.status(500).json({ message: 'Sync failed', error: error.message });
  }
};


export { getOrders, syncOrders };
