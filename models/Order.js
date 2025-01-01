// models/Order.js
import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  orderId: { type: String, required: true },
  items: [
    {
      id: { type: String, required: true },
      itemName: { type: String, required: true },
      itemEnglishName: { type: String },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
      total: { type: Number, required: true },
    },
  ],
  total: { type: Number, required: true },
  date: { type: Date, required: true },
  paidDate: { type: Date },
  orderNo: { type: Number, required: true },
  customerName: { type: String },
  status: {
    type: String,
    enum: ["PENDING", "PAID", "POSTPONED", "CANCELLED", "PAID_POSTPONED"],
    required: true,
  },
  synced: { type: Boolean, required: true },
  lastUpdated: { type: Date, required: true },
});

module.exports = mongoose.model("Order", OrderSchema);
